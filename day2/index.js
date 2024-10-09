     
     
    document.getElementById('sort').addEventListener('change', function () {

        var sort = this.value;
        var list = document.getElementById('price');
        var items = Array.from(list.getElementsByTagName('li'));
        var numbers = [];
    
        for (let i = 0; i < items.length; i++) {
           numbers.push(parseInt(items[i].textContent));
        }
    
    
        if (sort === 'asc') {
            numbers.sort(function (a, b) {
                return a - b; 
            });
        } else if (sort === 'desc') {
            numbers.sort(function (a, b) {
                return b - a; 
            });
        }
    
        list.innerHTML = '';
    
    
        for (let i = 0; i < numbers.length; i++) {
            var li = document.createElement('li');
            li.textContent = numbers[i];
            list.appendChild(li);
        }
    });
    