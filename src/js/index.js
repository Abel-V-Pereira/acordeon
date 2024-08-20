const resposta1 = document.querySelector('.resposta1');
const resposta2 = document.querySelector('.resposta2');
const resposta3 = document.querySelector('.resposta3');
const seta1 = document.getElementById('seta1');
const seta2 = document.getElementById('seta2');
const seta3 = document.getElementById('seta3');

seta1.addEventListener('click', function mostrarResposta1() {
    resposta1.classList.remove('esconder');

    seta1Aberta();

    esconderResposta2();

    esconderResposta3();

});

seta2.addEventListener('click', function mostrarResposta2() {
    resposta2.classList.remove('esconder');

    seta2Aberta();

    esconderResposta1();

    esconderResposta3();

});

seta3.addEventListener('click', function mostrarResposta3() {
    resposta3.classList.remove('esconder');

    seta3Aberta();

    esconderResposta1();

    esconderResposta2();

});

function esconderResposta1() {
    resposta1.classList.add('esconder');
    seta1.classList.remove('seta-aberta');
};

function esconderResposta2() {
    resposta2.classList.add('esconder');
    seta2.classList.remove('seta-aberta');
};

function esconderResposta3() {
    resposta3.classList.add('esconder');
    seta3.classList.remove('seta-aberta');
};

function seta1Aberta() {
    seta1.classList.add('seta-aberta');
};

function seta2Aberta() {
    seta2.classList.add('seta-aberta');
};

function seta3Aberta() {
    seta3.classList.add('seta-aberta');
};
