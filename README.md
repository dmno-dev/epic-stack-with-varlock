# Epic Stack + Varlock

An example repo using [Varlock](https://varlock.dev/) within the Epic Stack to help manage configuration and secrets.

With Varlock, we convert the `.env.example` file into a `.env.schema` which contains additional schema information about all configuration in the system. This will improve developer onboarding into the epic stack, as well as ongoing DX as devs add more config into their apps. It adds additional guardrails around configuration in general, and notably adds additional protection for sensitive secrets.

## Why do this?
- validations, default values, and documentation are all now in one source of truth (`.env.schema`)
- no more duplication between `.env.example` and `.env`, which means it will never get out of sync
- only overrides must be added by user
- clear env validation, decoupled from the application booting
- improved TS types / IntelliSense
- allows more flexible validation and composition of values based on other items
- easy to now pull secrets from secure backends like 1pass, etc
- leak prevention! log redaction!
- clear error messages when accessing bad env vars, or using them in wrong place

## Screenshots

Some screenshots of varlock in action:

_`varlock load` showing loaded and validated env_<br/>
<img width="488" height="393" alt="image" src="https://github.com/user-attachments/assets/9e80775e-ddf4-47b8-8ca1-0e4471c37299" />
<br/>

_Improved IntelliSense_<br/>
<img width="435" height="131" alt="image" src="https://github.com/user-attachments/assets/3732dc0f-79f5-4ee5-a846-d314b31db1da" />
<br/>

_Leak detection example_<br/>
<img width="657" height="201" alt="image" src="https://github.com/user-attachments/assets/7598448a-d18c-47b6-b7c5-df3c68bbd875" />
<br/>

_Log redaction example_<br/>
<img width="202" height="52" alt="image" src="https://github.com/user-attachments/assets/3643b5d0-eec6-4f68-a488-0dfda7f18684" />
<br/>

_Example of failing env validation_<br/>
<img width="430" height="176" alt="image" src="https://github.com/user-attachments/assets/d6258c48-43b8-4b6a-95d9-596a99f24e2b" />
<br/>