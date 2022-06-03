const App = {
    init() { 
  console.log("Init")
    this.controllers.createLayout()  
  console.log("End")
},

controllers: {
    createHeaderRight() {
      const els = App.elements.header

      const gmail = document.createElement("span")
      const images = document.createElement("span")
      const dots = document.createElement("span")
      const avatar = document.createElement("span")

      gmail.innerHTML = "Gmail"
      images.innerHTML = "Images"
      dots.innerHTML = "..."
      avatar.innerHTML = "P"

      gmail.style.marginRight = "1rem"
      dots.style.marginRight = "1rem"
      images.style.marginRight = "1rem"
      avatar.style.marginRight = "1rem"

      els.right.appendChild(gmail)
      els.right.appendChild(images)
      els.right.appendChild(dots)
      els.right.appendChild(avatar)
      els.container.appendChild(els.right)
    },

    createBodyLogo() {
        const els = App.elements.body

        const logo = document.createElement('img')

        logo.src = "https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        logo.style.width = "320px"

        els.google.appendChild(logo)
        els.container.appendChild(els.google)
    },

    createSearchInput() {
      const els = App.elements.body

      const searchinput = document.createElement("input")
      const lup = document.createElement("img")
      const mic = document.createElement("img")

      searchinput.style.borderColor = "transparent"
      searchinput.style.border = "none"
      searchinput.style.outline = "none"
      searchinput.style.width = "80%"
      searchinput.style.height = "80%"
      searchinput.style.display = "flex"
      lup.src = "https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png"
      lup.style.width = "20px"
      mic.src = "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-25-512.png"
      mic.style.width = "30px"

      els.search.appendChild(lup)
      els.search.appendChild(searchinput)
      els.search.appendChild(mic)
      els.container.appendChild(els.search)
    },

    createButtonsLine() {
      const els = App.elements.body

      const button1 = document.createElement("button")
      const button2 = document.createElement("button")

      button1.innerHTML = "Pesquisa Google"
      button2.innerHTML = "Estou com sorte"
      button1.style.borderRadius = "5px"
      button2.style.borderRadius = "5px"
      button1.style.marginRight = "1rem"
      button1.style.border = "none"
      button2.style.border = "none"
      button1.style.backgroundColor = "rgb(250, 236, 236)"
      button2.style.backgroundColor = "rgb(250, 236, 236)"
      button1.style.padding = "11px 20px"
      button2.style.padding = "11px 20px"

      button1.onmouseover = (evt) =>{
        button1.style.border = "1px solid white"
      },
      button1.onmouseout = (evt) =>{
        button1.style.border = "none"
      },
      button2.onmouseover = (evt) =>{
        button2.style.border = "1px solid white"
      },
      button2.onmouseout = (evt) =>{
        button2.style.border = "'none"
      },
        
      els.buttons.appendChild(button1)
      els.buttons.appendChild(button2)
      els.container.appendChild(els.buttons)
    },

    createTextDips() {
      const els = App.elements.body

      const text1 = document.createElement("span")
        
      text1.innerHTML = "Disponibilizado pelo Google em : English"

      els.text.appendChild(text1)
      els.container.appendChild(els.text)
    },

    createFooter1Line1() {
        const els = App.elements.footer1
  
        const brazil = document.createElement("span")
          
        brazil.innerHTML = "Brazil"
          
        brazil.style.marginRight = "1rem"
          
        els.line1.appendChild(brazil)
        els.container.appendChild(els.line1)
      },

    createFooter2Line2left() {
        const els = App.elements.footer2
  
        const sobre = document.createElement("span")
        const publicidade = document.createElement("span")
        const negocios = document.createElement("span")
        const como = document.createElement("span")
          
        sobre.innerHTML = "Sobre"
        publicidade.innerHTML = "Publicidade"
        negocios.innerHTML = "Negócios"
        como.innerHTML = "Como Funciona a Pesquisa"
                  
        sobre.style.marginRight = "1rem"
        publicidade.style.marginRight = "1rem"
        negocios.style.marginRight = "1rem"
        como.style.marginRight = "1rem"
          
        els.line2left.appendChild(sobre)
        els.line2left.appendChild(publicidade)
        els.line2left.appendChild(negocios)
        els.line2left.appendChild(como)
        els.container.appendChild(els.line2left)
      },  

    createFooter2Line2right() {
        const els = App.elements.footer2
  
        const privacidade = document.createElement("span")
        const termos = document.createElement("span")
        const configs = document.createElement("span")
                  
        privacidade.innerHTML = "Privacidade"
        termos.innerHTML = "Termos"
        configs.innerHTML = "Configurações"
                          
        privacidade.style.marginRight = "1rem"
        termos.style.marginRight = "1rem"
        configs.style.marginRight = "1rem"
                  
        els.line2right.appendChild(privacidade)
        els.line2right.appendChild(termos)
        els.line2right.appendChild(configs)
        els.container.appendChild(els.line2right)
      },    

    createLayout() {
      console.log("create layout")

      const els = App.elements
     
      this.createHeaderRight()
      this.createBodyLogo()
      this.createSearchInput()
      this.createButtonsLine()
      this.createTextDips()
      this.createFooter1Line1()
      this.createFooter2Line2left()
      this.createFooter2Line2right()
      
    this.setStyle(els.header.container, {
      display: "flex",
      justifyContent: "right",
      alignItems:"center",
      padding: "10px",
      marginleft: "1rem",
      color: "gray"
    })
      
    this.setStyle(els.body.container, {
      display: "flex",
      flexDirection: "column",
      alignItems:"center",
      justifyContent: "space-between",
      marginTop: "131px"
    })

    this.setStyle(els.body.google, {
      display: "flex",
      alignItems:"center",
      justifyContent: "center",
      marginTop: "0px"
    })

    this.setStyle(els.body.search, {
      border: "1px solid gray",
      width: "500px",
      padding: "10px",
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "20px"
    })

    this.setStyle(els.body.buttons, {
      display: "flex",
      alignItems:"center",
      justifyContent: "space-between",
      marginTop: "35px",
    })

    this.setStyle(els.body.text, {
      display: "flex",
      alignItems:"center",
      justifyContent: "center",
      marginTop: "35px"
    })

    this.setStyle(els.footer1.container, {
      display: "flex",
      justifyContent: "left",
      alignItems:"center",
      padding: "10px",
      marginleft: "1rem",
      color: "gray",
      marginTop: "213px",
      backgroundColor: "rgb(250, 236, 236)"
    })
    
    this.setStyle(els.footer2.container, {
      display: "flex",
      justifyContent: "space-between",
      alignItems:"center",
      padding: "10px",
      marginleft: "1rem",
      color: "gray",
      backgroundColor: "rgb(250, 236, 236)"
    })

    els.App.appendChild(els.header.container)
    els.App.appendChild(els.body.container)
    els.App.appendChild(els.footer1.container)
    els.App.appendChild(els.footer2.container)

      console.log("layout created")
    },

    setStyle(el, style) {
        for(let key in style) {
            el.style[key] = style[key]
        }
    }
},

elements: {
    App: document.getElementById("app"),
    header: {
        container: document.createElement("div"),
        right: document.createElement("div"),
    },
    body: {
        container: document.createElement("div"),
        google: document.createElement("div"),
        search: document.createElement("div"),
        buttons: document.createElement("div"),
        text: document.createElement("div"),
    },
    footer1: {
        container: document.createElement("div"),
        line1: document.createElement("div"),
    },
    footer2: {
        container: document.createElement("div"),
        line2left: document.createElement("div"),
        line2right: document.createElement("div"),
    },
},

}

App.init()