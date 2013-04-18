/*
* Daves web component
*/

xtag.register('x-helloworld', {
    lifecycle: {
        created: function() {
            var name = prompt("Your name is", "");
            this.innerHTML = 'Hello ' + name;
        }
    }
});