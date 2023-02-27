const LIST = [
  {
    id: 1,
    nome: 'Mestre Yoda',
    avatar: 'Images/yoda.png'
  },
  {
    id: 2,
    nome: 'Luke Skywalker',
    avatar: 'Images/luke.png'
  },
  {
    id: 3,
    nome: 'Princesa Leia',
    avatar: 'Images/leia.png'
  },
  {
    id: 4,
    nome: 'Han Solo',
    avatar: 'Images/hansolo.png'
  },
  {
    id: 5,
    nome: 'Darth Vader',
    avatar: 'Images/vader.png'
  },
  {
    id: 6,
    nome: 'Chewbacca',
    avatar: 'Images/chewbacca.png'
  },
  {
    id: 7,
    nome: 'R2DE',
    avatar: 'Images/r2d2.png'
  },
  {
    id: 8,
    nome: 'C3p0',
    avatar: 'Images/c3po.png'
  }
]

const App = new Vue({
  el: '#app',
  data: {
    title: 'Star Wars Lego',
    userName: 'Mancha',
    characters: LIST,
    searchName: ''
  },
  methods: {
    like(userName) {
    alert(`O personagem ${userName} recebeu um like`)
    },
    remove(id) {
      const list = this.characters

      const result = list.filter(item => {
        return item.id !== id
      })

      this.characters = result
    },
    search() {
      if(this.searchName === ''){
        return alert(`O campo de busca é obrigatorio.`)
      }

      const list = this.characters = LIST

      const result = list.filter(item => {
        return item.nome === this.searchName
      })

      if (result.length <= 0) {
        alert(`Nenhum regsitro encotrato.`)
      }
      else {
        this.characters = result
      }  
    }
  }
})