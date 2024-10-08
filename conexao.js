
const firebaseConfig = {
    apiKey: "AIzaSyDdq_kV9MrE7xWo5vJ61tZV33L0B-UQKvE",
    authDomain: "relato-producao.firebaseapp.com",
    projectId: "relato-producao",
    storageBucket: "relato-producao.appspot.com",
    messagingSenderId: "645787294401",
    appId: "1:645787294401:web:40a4ef0dbb7adaf5da1240",
    measurementId: "G-JNTFWK7MBR"
  };

    // Inicializar o Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    function enviarDados() {
        const dados = {};
        for (let i = 1; i <= 8; i++) {
            dados[`input${i}`] = document.getElementById(`input${i}`).value;
        }
        const dataHora = new Date().toISOString();
        database.ref('relatos/' + dataHora).set({ ...dados, dataHora });
        alert('Dados armazenados com sucesso!');
        document.getElementById('meuForm').reset(); // Limpa o formulário após o envio
    }