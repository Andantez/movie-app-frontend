import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import Navigation from '../Navigation';
import { getProfilePage } from '../../../features/user/userSlice';
import { useLocation, Link } from 'react-router-dom';
import ProfilePicture from '../../_helpers/ProfilePicture';
import Poster from '../../Home/Poster';

interface LocationState {
    userID: string;
}

const UserFilms = () => {
    const { state } = useLocation<LocationState>();
    const user = useSelector((state: RootState) => state.userAuth.user_for_profile_page.user);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) dispatch(getProfilePage(state.userID));
    }, [dispatch, user, state.userID]);
    if (user) {
        return (
            <section className="user-films">
                <div className="wrap-user-nav">
                    <div>
                        <ProfilePicture user={user} />
                        <span>{user.username}</span>
                    </div>
                    <Navigation />
                </div>
                <div className="posters-container">
                    {user.watched_movies.map((movie) => (
                        <Link
                            key={movie._id}
                            to={`/film/${movie.title.toLocaleLowerCase().replace(/ /g, '-')}`}
                        >
                            <figure>
                                <Poster url={movie.poster} title={movie.title} tmdb={false} />
                                <figcaption>
                                    {user.liked_movies.find((m) => movie._id === m._id) && (
                                        <i className="like-gray"></i>
                                    )}
                                </figcaption>
                            </figure>
                        </Link>
                    ))}
                </div>
            </section>
        );
    }
    return null;
};

export default UserFilms;