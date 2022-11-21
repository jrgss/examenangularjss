export class Comentario{
    constructor(
        public idComenario:number,
        public idCubo:number,
        public idUsuario:number,
        public comentario:string,
        public fechaComentario:string,
    ){}
}