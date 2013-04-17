/*
* Daves web component
*/

xtag.register('x-helloworld', {
    lifecycle: {
        created: function() {
            this.innerHTML = 'Hello World!';
        }
    }
});