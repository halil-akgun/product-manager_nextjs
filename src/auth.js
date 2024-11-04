import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github";

const config = {
    providers: [
        GitHub
    ],

    callbacks: {
        // bu callback mutlaka tanimlanmali
        // middleware icinde aktihf hale getirilen route lara her giriste calisir
        // eger bu callback true donerse route icine girlir, yoksa signin sayfasina gidilir
        authorized({ request, auth }) {
            console.log(auth);
            return !!auth?.user;
        }
    }
}

// Olusturulan config nesnesine gore tum altyapiyi hazirlayan NextAuth metodudur.
export const { handlers, auth } = NextAuth(config);