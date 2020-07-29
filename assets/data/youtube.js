function getImage(id) {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}
function getUrl(id) {
    return `https://youtu.be/${id}`
}

export const youtube = {
    name: 'Youtube',
    id: 'youtube',
            data: [
                {
                    id: 'DIcltYJ8bv4',
                    name:   'MJ 404 in Pure CSS3',
                    image:  getImage('DIcltYJ8bv4'),
                    url:    getUrl('DIcltYJ8bv4'),
                    details: `404 Error page concept in CSS3 making video`
                },
                {
                    id: 'dOUy_F1fEA8',
                    name:   'Layered Icons in CSS3',
                    image:  getImage('dOUy_F1fEA8'),
                    url:    getUrl('dOUy_F1fEA8'),
                    details: `Social Media Layered Icon with Hover Animation in CSS3 tutorial`
                },
                {
                    id: 'uHo0gv0eKnk',
                    name:   'Envelope contact form',
                    image:  getImage('uHo0gv0eKnk'),
                    url:    getUrl('uHo0gv0eKnk'),
                    details: `Contact form concept in pure CSS3 tutorial`
                },
                {
                    id: 'Cus9S2yxkzQ',
                    name:   'Semi Donut chart making in CSS3',
                    image:  getImage('Cus9S2yxkzQ'),
                    url:    getUrl('Cus9S2yxkzQ'),
                    details: `Semi Circle Donut chart making in pure CSS3 without JavaScript tutorial`
                },

            ]
};