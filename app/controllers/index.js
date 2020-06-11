import Controller from '@ember/controller';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'

export default class IndexController extends Controller {

  @tracked playerChoice = ''
  @tracked cpuChoice
  @tracked outcome

  @tracked cpuScore = 0 
  @tracked playerScore = 0

  computerGenerated(){
    const choices = ['Rock', 'Paper', 'Scissors']
    const computer = Math.floor(Math.random() * choices.length)
    this.cpuChoice = choices[computer]
    console.log(this.cpuChoice )

    return this.cpuChoice 
  }

 async decideWinner() {
    await this.computerGenerated()

   let { playerChoice, cpuChoice } = this

    if (playerChoice === cpuChoice) {
      this.outcome = 'Draw'
    }

    else if (playerChoice === 'Paper' && cpuChoice === 'Rock'
      || playerChoice === 'Scissors' && cpuChoice === 'Paper' ||
      playerChoice === 'Rock' && cpuChoice === 'Scissors') {
      this.outcome = 'Win'
      this.playerScore++
    } else {
      this.outcome = 'Lose'
      this.cpuScore++
    }
  }

  @action 
  userChoice(e) {
    this.playerChoice = e.target.value
    this.decideWinner()
  }

}
