function LoadData() {
    const dadosExistentes = localStorage.getItem("bancoUsuarios");
    if (dadosExistentes) {
      return JSON.parse(dadosExistentes);
    } else {
      const usuariosIniciais = [
        { id: 1, user: "Fontes", password: "12345", ADMIN: true },
        { id: 2, user: "gabs", password: "12345", ADMIN: false },
        { id: 3, user: "bruno", password: "12345", ADMIN: false },
      ];
      localStorage.setItem("bancoUsuarios", JSON.stringify(usuariosIniciais));
      return usuariosIniciais;
    }
  }
