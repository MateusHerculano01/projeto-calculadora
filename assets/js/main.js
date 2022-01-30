function Calculadora() {
  this.display = document.querySelector('.display');
  this.display.focus();
  
  this.init = () => {
    this.captureClick();
    this.captureEnter();
    
  };

  this.captureEnter = () => {
    this.display.addEventListener('keypress', event => {
      if(event.keyCode !== 13) return;
      this.makeAccount();
    });
  };

  this.captureClick = () => {
    document.addEventListener('click', event => {
      const element= event.target;

      if (element.classList.contains('btn-num')) this.addNumDisplay(element);
      if (element.classList.contains('btn-clear')) this.clear();
      if (element.classList.contains('btn-del')) this.del();
      if (element.classList.contains('btn-eq')) this.makeAccount();

    });
  };

  this.addNumDisplay = element => {
    this.display.value += element.innerText;
    this.display.focus();
  }
  
  this.clear = () => this.display.value = '';
  

  this.del = () => this.display.value = this.display.value.slice(0, -1);
  
  this.makeAccount = () => {
    try {
      const count = eval(this.display.value);
      
      if(!count) {
        alert('Conta inválida');
        return
      }

      this.display.value = count;

    } catch (error) {
      alert('Conta inválida');
    }
  };

}

const calculadora = new Calculadora();
calculadora.init();