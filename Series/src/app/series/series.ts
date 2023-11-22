export class Series {
    id: number;
    nombre: string; 
    temporadas: number;
    descripcion: String;
    foto: string;
    director: string;
    

    public constructor(id: number, nombre: string, temporadas: number, descripcion: string, director: string, foto: string,) {
        this.id = id; 
        this.nombre = nombre;
        this.temporadas = temporadas; 
        this.descripcion = descripcion; 
        this.foto = foto;
        this.director = director;
       
      }

}
