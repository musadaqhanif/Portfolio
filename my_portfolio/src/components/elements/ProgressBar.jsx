import { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ minimum: 0.25, speed: 400, showSpinner: false, trickleSpeed: 180 });

/**
 * Route-change loading bar. Handlers are registered inside an effect and
 * removed on unmount, rather than at module scope, so repeated imports during
 * fast refresh cannot stack duplicate listeners.
 */
const ProgressBar = () => {
  useEffect(() => {
    const start = () => NProgress.start();
    const done = () => NProgress.done();

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', done);
    Router.events.on('routeChangeError', done);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', done);
      Router.events.off('routeChangeError', done);
    };
  }, []);

  return null;
};

export default ProgressBar;
