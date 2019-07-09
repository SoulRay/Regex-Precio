function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  
  
  function formatCurrency(input) {

    var input = document.getElementById("textPrecio");
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.
    
    // get input value
    var input_val = input.value;
    
    // don't validate empty input
    if (input_val === "") { return; }
    
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
    
    // send updated string to input
    input.value = input_val;
  }
  
