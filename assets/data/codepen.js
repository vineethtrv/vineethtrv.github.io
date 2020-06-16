function getImage(id) {
    return `https://assets.codepen.io/176986/internal/screenshots/pens/${id}.default.png`
}
function getUrl(id) {
    return `https://codepen.io/vineethtrv/full/${id}`
}
export const codepen = {
        name: 'Codepen',
        id: 'codepen',
        data: [
            {
                name: 'MJ 404',
                image: getImage('BaoRZMx'),
                url: getUrl('BaoRZMx'),
                details: 'MJ 404 in css3 inspired from uplabs post'
            }
            , {
                name: 'Panda Login',
                image: getImage('NxqKoY') ,
                url: getUrl('NxqKoY'),
                details: 'Funny material transition login form'
            }
            , {
                name: 'Analog Digital clock',
                image: getImage('GvROZV') ,
                url: getUrl('GvROZV'),
                details: 'Analog Digital clock inspired from Black [ DD ] theme'
            }
            , {
                name: '404 Crying Baby',
                image: getImage('NRzNLz') ,
                url: getUrl('NRzNLz'),
                details: '404 error page in pure css3. character inspired from  Arturo MBs Cry Baby(dribbble) '
            }
            , {
                name: 'Semi Circle Donut Charts',
                image: getImage('xGjQOX') ,
                url: getUrl('xGjQOX'),
                details: 'Semi circle donut charts in pure css3 '
            }
            , {
                name: '404 Page not found',
                image: getImage('ZbKLmq') ,
                url: getUrl('ZbKLmq'),
                details: 'Page not found in pure css3 '
            }
          
        ]
};