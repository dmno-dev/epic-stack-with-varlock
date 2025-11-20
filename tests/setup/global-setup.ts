import 'varlock/auto-load'
import { fileURLToPath } from 'node:url'
import { execaCommand } from 'execa'
import fsExtra from 'fs-extra'
import { ENV } from 'varlock/env'
import '#app/utils/cache.server.ts'



export async function setup() {
	const dbPath = fileURLToPath(ENV.DATABASE_URL);
	const databaseExists = await fsExtra.pathExists(dbPath)

	if (databaseExists) {
		const databaseLastModifiedAt = (await fsExtra.stat(dbPath))
			.mtime
		const prismaSchemaLastModifiedAt = (
			await fsExtra.stat('./prisma/schema.prisma')
		).mtime

		if (prismaSchemaLastModifiedAt < databaseLastModifiedAt) {
			return
		}
	}

	await execaCommand(
		'npx prisma migrate reset --force --skip-seed --skip-generate',
		{
			stdio: 'inherit',
		},
	)
}
