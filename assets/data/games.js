function getImage(id) {
    return `https://assets.codepen.io/176986/internal/screenshots/pens/${id}.default.png`
}
function getUrl(id) {
    return `https://codepen.io/vineethtrv/full/${id}`
}
export const games = {
        name: 'Games',
        id: 'games',
        data: [
            {
                name: 'CSS3 Flappy Bird',
                image: getImage('MWjYYNd'),
                url: getUrl('MWjYYNd'),
                details: "Trying to recreate Flappy Bird game in pure CSS3,  Built on CSS modelling logic without the involvement of javascript. This Flappy Bird will not fly on mobile because it's all about mouse hover event and mobile doesn't have one"
            }
            , {
                name: 'Cannon  Fight',
                image: getImage('QWWdwZE') ,
                url: getUrl('QWWdwZE'),
                details: 'Math game to teach reflection'
            }
            , {
                name: 'Finding Dora',
                image: getImage('QGJBJX') ,
                url: getUrl('QGJBJX'),
                details: 'Simple maze pathfinding game in CSS3'
            }
            , {
                name: 'Shoot Easter Bunny',
                image: getImage('mPwbwB') ,
                url: getUrl('mPwbwB'),
                details: 'Html Game based on Easter , Shoot maximum number of Bunny on Time'
            }
        ]
};