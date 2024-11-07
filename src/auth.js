import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const config = {
    providers: [
        Credentials({
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                const resp = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials),
                })
                if (!resp.ok) {
                    return null
                }

                const user = await resp.json();
                return user;
            }
        }),
        GitHub,
        Google
    ],

    callbacks: {
        // bu callback mutlaka tanimlanmali
        // middleware icinde aktihf hale getirilen route'lara her giriste calisir
        // eger bu callback true donerse route icine girlir, yoksa signin sayfasina gidilir
        authorized({ request, auth }) {
            console.log(auth);
            return !!auth?.user;
        }
    }
}

// Olusturulan config nesnesine gore tum altyapiyi hazirlayan NextAuth metodudur.
export const { handlers, auth } = NextAuth(config);