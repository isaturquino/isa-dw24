// exercício 10 Extraindo propriedades específicas
const usuarios = [
    { nome: 'Isabely', idade: 16, email: 'isa@utfpr.edu.br' },
    { nome: 'Marjory', idade: 16, email: 'marjory@utfpr.edu.br' },
    { nome: 'Samara', idade: 17, email: 'samara@utfpr.edu.br' }
  ];
  
  const usuariosNomeEmail = usuarios.map(usuario => {
    return { nome: usuario.nome, email: usuario.email };
  });
  usuariosNomeEmail.forEach(usuario => {
    console.log(`${usuario.nome}, ${usuario.email}`);
  });
  