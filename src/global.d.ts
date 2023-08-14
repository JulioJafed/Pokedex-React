/* Esto con el fin de poder usar modulos de css apartes del principal... */
declare module "*module.css"{
    const classes:{[key: string]: string};
    export default classes; 
}


declare module "*.png"; 
declare module "*.svg";
declare module "*.gif";