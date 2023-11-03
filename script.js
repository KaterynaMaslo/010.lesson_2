function generateList(array, parent) {

    if (!Array.isArray(array)) {
       return;
    }

    const ul = document.createElement('ul');

    array.forEach(item => {
      const li = document.createElement('li');
      li.textContent = Array.isArray(item) ? '' : item;
      ul.appendChild(li);

      if (Array.isArray(item)) {
        generateList(item, li);
      }
    });

    if (parent) {
      parent.appendChild(ul);
    } else {
      document.body.appendChild(ul);
    }
  }

let arr = [1,2,3,[1.1,1.2,1.3],4];
generateList(arr, null);