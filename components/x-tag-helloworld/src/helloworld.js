/*
* Daves web component
*/

xtag.register('x-helloworld', {
    lifecycle: {
        created: function() {
            var name = 'Dave';
            this.innerHTML = 'Hello ' + name;
        }
    }
});