import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  phrases = [
    '"O que você faz hoje pode melhorar todos os seus amanhãs." - Ralph Marston',
    '"Não tenha medo de falhar. Tenha medo de não tentar." - Anônimo',
    '"Acredite em si mesmo e tudo será possível." - Anônimo',
    '"Comece onde você está, use o que você tem, faça o que você pode." - Arthur Ashe',
    '"A felicidade não é algo pronto. Ela vem das suas próprias ações." - Dalai Lama',
    // Add more phrases as needed
  ];

  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }
}
