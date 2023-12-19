import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshThunk } from './redux/auth/operations';
import PrivateRoute from './routes/PrivateRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Layout from './components/Layout/Layout';

// import HomePage from './pages/Homepage/Homepage';
// import DrinksPage from './pages/DrinksPage/DrinksPage';
// import AddDrinkPage from './pages/AddDrinkPage/AddDrinkPage';
// import FavoriteDrinksPage from './pages/FavoriteDrinksPage/FavoriteDrinksPage';
// import UserDrinkPage from './pages/UserDrinkPage/UserDrinkPage';
// import MyDrinksPage from './pages/MyDrinksPage/MyDrinksPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import PolicyPage from './pages/PolicyPage/PolicyPage';
// import AgreementPage from './pages/AgreementPage/AgreementPage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const HomePage = lazy(() => import('./pages/Homepage/Homepage'));
  const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
  const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
  const FavoriteDrinksPage = lazy(() =>
    import('./pages/FavoriteDrinksPage/FavoriteDrinksPage')
  );
  const UserDrinkPage = lazy(() =>
    import('./pages/UserDrinkPage/UserDrinkPage')
  );
  const MyDrinksPage = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));
  const PolicyPage = lazy(() => import('./pages/PolicyPage/PolicyPage'));
  const AgreementPage = lazy(() =>
    import('./pages/AgreementPage/AgreementPage')
  );

  return (
    <>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/drinks"
            element={
              <PrivateRoute>
                <DrinksPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <AddDrinkPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoriteDrinksPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/drink/:drinkId"
            element={
              <PrivateRoute>
                <UserDrinkPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/my"
            element={
              <PrivateRoute>
                <MyDrinksPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/agreement"
            element={
              <PrivateRoute>
                <AgreementPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/policy"
            element={
              <PrivateRoute>
                <PolicyPage />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute>
                <NotFoundPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
