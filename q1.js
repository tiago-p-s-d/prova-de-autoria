/*. Utilizando destructuring, escreva uma função chamada formatarContato que aceite um 
objeto contato com propriedades como nome, email e telefone. A função deve extrair 
essas informações usando destructuring e retornar uma string formatada com essas 
informações. Por exemplo, se o objeto for {nome: "Ana Silva", email: 
"ana.silva@example.com", telefone: "123456789"}, a função deve retornar a string: 
"Nome: Ana Silva, Email: ana.silva@example.com, Telefone: 123456789"*/

class Pessoa{
constructor(nome,email, telefone){
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
}
}

let tiago = {nome: "Ana Silva", email: 
"ana.silva@example.com", telefone: "123456789"};




const formatarContato = (pessoa) => {
    let{nome, email, telefone} = pessoa

return `Nome: ${nome}, Email: ${email}, contato: ${telefone}`

}

console.log(formatarContato(tiago));



