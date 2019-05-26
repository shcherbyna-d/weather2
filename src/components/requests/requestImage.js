export default class RequestImage {
	constructor() {
		this.baseUrl = 'https://api.unsplash.com/';
		this.clientId = '5b43dc620f6401e0b4532b3d504345c6d46c090da03244346e1b3b9766a3696f';
	}

	getImages () {
		const url = `${this.baseUrl}search/photos?page=1&query=sky&orientation=landscape&client_id=${this.clientId}`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            const image = response.results[0];
            this.setState(() => {
                return {
                    image: image,
                }
            })    

        })
        .catch((e) => console.log(e));
	}

}