function verificacao(x) {
    if (isNaN(x)) {
      return "False";
    }
    return "True";
  }

  console.log(verificacao("12345"))
  console.log(verificacao("abc123"))
  console.log(verificacao("67890"))