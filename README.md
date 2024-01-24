## NextJS Template by [hcampos](https://github.com/Sakoutecher)

This template enables you to set up a project quickly with numerous useful libraries. There are two versions available – one with Supabase and Supabase Auth for simplified authentication, and another version without Supabase.

A default Prisma schema is installed in the project, which is the one suggested by the Prisma documentation. Therefore, remember to modify it and run the following command (with npm, yarn or pnpm) :

```bash
pnpm prisma:migrate
```

## Librairies

- [NextJS](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [ShadcnUI](https://ui.shadcn.com)
- [Clsx](https://www.npmjs.com/package/clsx)
- [Prisma](https://prisma.io)
- [Supabase](https://supabase.com)
- [Supabase auth](https://supabase.com/docs/guides/auth)
- [Zod](https://zod.dev)
- [Next themes](https://www.npmjs.com/package/next-themes)

## Utils

- [Custom component type](https://github.com/Sakoutecher/nextjs-template/blob/stable/src/lib/utils/component/component.ts)
- [Custom scripts](https://github.com/Sakoutecher/nextjs-template/blob/stable/package.json) (prisma:migrate, prisma:client, prisma:seed...)

## FAQ

>**How to change the values insert in the database using the seeder ?**<hr>
Open the [`seed.ts`](https://github.com/Sakoutecher/nextjs-template/blob/stable/src/lib/utils/prisma/seed.ts) file, you can find this file in the [`src/lib/utils/prisma`](https://github.com/Sakoutecher/nextjs-template/blob/stable/src/lib/utils/prisma) folder.
Then change value in the main function.

<br>

>**How to get the second version without Supabase and Supabase auth ?**<hr>
Click on the button `Use this template` and create a repositorie, **don't forget to check the ckeckbox `ìnclude all branches`**, then and the created repositorie change the current branch `stable` to the one who's called `without-supabase`.