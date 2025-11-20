// This helps load DATABASE_URL into prisma

import 'varlock/auto-load' // this loads DATABASE_URL
import { defineConfig } from 'prisma/config'

export default defineConfig({
	earlyAccess: true, // TS type in this prisma version requires this, but should go away in future
})