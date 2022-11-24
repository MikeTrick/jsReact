let initialState = {
    usersData: [
        {
            name: 'Mike',
            familyName: 'Lapuzin',
            photo: 'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863',
            interests: 'snowboard',
            id: 1
        },
        {
            name: 'Mike',
            familyName: 'Lapuzin',
            photo: 'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863',
            interests: 'snowboard',
            id: 2
        }
    ]
}

const usersReducer = (state = initialState, action) => {


    return state;
}
export default usersReducer;