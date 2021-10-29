import { serverHttp } from "./app";

serverHttp.listen(4000, () => console.log(`O servidor está rodando na porta 4000`))