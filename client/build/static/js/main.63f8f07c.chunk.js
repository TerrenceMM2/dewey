(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
    [0],
    {
        146: function (e, t, a) {
            e.exports = a(322);
        },
        151: function (e, t, a) {},
        152: function (e, t, a) {},
        317: function (e, t, a) {},
        318: function (e, t, a) {
            e.exports = a.p + 'static/media/dewey_crying.dc3a13cd.png';
        },
        319: function (e, t, a) {
            e.exports = a.p + 'static/media/dewey_embarrassed.145e7cc4.png';
        },
        320: function (e, t, a) {
            e.exports = a.p + 'static/media/dewey_writing.82f75b96.png';
        },
        321: function (e, t, a) {
            e.exports = a.p + 'static/media/dewey_sick.e303120f.png';
        },
        322: function (e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(10),
                c = a.n(o),
                l = (a(151), a(152), a(8)),
                i = a.n(l),
                s = a(11),
                u = a(7),
                m = a(36),
                d = a(18),
                p = a(42),
                g = function (e, t) {
                    switch (t.type) {
                        case 'REGISTER_SUCCESS':
                            return { loggedIn: !1, registered: !0, message: t.payload.message };
                        case 'REGISTER_FAILURE':
                            return { loggedIn: !1, message: t.payload.message };
                        case 'LOGIN_SUCCESS':
                            var a = t.payload.user.token.split(' ')[1],
                                n = t.payload.user,
                                r = n.firstName,
                                o = n.lastName,
                                c = n.email;
                            return (
                                localStorage.setItem('token', a),
                                { loggedIn: !0, firstName: r, lastName: o, email: c }
                            );
                        case 'LOGIN_FAILURE':
                            return { loggedIn: !1, message: t.payload.message };
                        case 'LOGOUT':
                            return localStorage.removeItem('token'), { loggedIn: !1 };
                        case 'VALIDATION_SUCCESS':
                            return { loggedIn: !0 };
                        case 'VALIDATION_FAILURE':
                            return (
                                localStorage.removeItem('token'),
                                { loggedIn: !1, message: t.payload.message }
                            );
                        case 'UPDATE_PASSWORD_SUCCESS':
                            return Object(p.a)({}, e, {
                                updatedPwd: !0,
                                message: t.payload.message
                            });
                        case 'UPDATE_PASSWORD_FAILURE':
                            return Object(p.a)({}, e, {
                                updatedPwd: !1,
                                message: t.payload.message
                            });
                        case 'RESET_EMAIL_SUCCESS':
                        case 'RESET_EMAIL_FAILURE':
                            return Object(p.a)({}, e, { message: t.payload.message });
                        default:
                            return e;
                    }
                },
                f = a(123),
                b = a.n(f),
                h = Object(n.createContext)(),
                E = function (e) {
                    var t = e.children,
                        a = Object(n.useReducer)(g, { loggedIn: !1 }, function () {
                            var e = localStorage.getItem('token');
                            if (!e) return { loggedIn: !1 };
                            var t = Date.now() / 1e3;
                            try {
                                var a = b()(e),
                                    n = a.exp,
                                    r = a.email,
                                    o = a.firstName,
                                    c = a.lastName;
                                if (n > t)
                                    return { loggedIn: !0, email: r, firstName: o, lastName: c };
                                if (t >= n)
                                    return localStorage.removeItem('token'), { loggedIn: !1 };
                            } catch (l) {
                                return localStorage.removeItem('token'), { loggedIn: !1 };
                            }
                        }),
                        o = Object(u.a)(a, 2),
                        c = o[0],
                        l = o[1];
                    return r.a.createElement(h.Provider, { value: { user: c, dispatch: l } }, t);
                },
                y = a(14),
                v = a.n(y),
                w = function (e, t) {
                    return v()({
                        method: 'POST',
                        url: '/api/auth/login',
                        data: { email: e, password: t }
                    });
                },
                x = function (e) {
                    e
                        ? (v.a.defaults.headers.common.Authorization = 'Bearer '.concat(e))
                        : delete v.a.defaults.headers.common.Authorization;
                },
                k = a(353),
                O = a(356),
                j = a(370),
                S = a(358),
                C = a(371),
                N = a(362),
                A = a(79),
                I = a.n(A),
                D = Object(k.a)(function (e) {
                    return {
                        link: { textDecoration: 'none', color: e.palette.secondary.main },
                        paper: {
                            margin: e.spacing(3),
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        },
                        avatar: { margin: e.spacing(1), backgroundColor: e.palette.primary.main },
                        form: { width: '100%', marginTop: e.spacing(1) },
                        submit: { margin: e.spacing(3, 0, 2) }
                    };
                }),
                T = function () {
                    var e,
                        t = Object(n.useContext)(h),
                        o = t.user,
                        c = t.dispatch,
                        l = Object(n.useState)(''),
                        p = Object(u.a)(l, 2),
                        g = p[0],
                        f = p[1],
                        b = Object(n.useState)(''),
                        E = Object(u.a)(b, 2),
                        y = E[0],
                        v = E[1],
                        k = D(),
                        A = o.loggedIn,
                        T = o.message,
                        L = (function () {
                            var e = Object(s.a)(
                                i.a.mark(function e(t) {
                                    var a;
                                    return i.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            t.preventDefault(),
                                                            (e.prev = 1),
                                                            (e.next = 4),
                                                            w(g, y)
                                                        );
                                                    case 4:
                                                        (a = e.sent),
                                                            c({
                                                                type: 'LOGIN_SUCCESS',
                                                                payload: { user: a.data }
                                                            }),
                                                            x(localStorage.token),
                                                            (e.next = 14);
                                                        break;
                                                    case 9:
                                                        (e.prev = 9),
                                                            (e.t0 = e.catch(1)),
                                                            c({
                                                                type: 'LOGIN_FAILURE',
                                                                payload: {
                                                                    message: e.t0.response.data.data
                                                                }
                                                            }),
                                                            v(''),
                                                            f('');
                                                    case 14:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[1, 9]]
                                    );
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                    return (
                        (e = A
                            ? r.a.createElement(m.a, { to: '/dashboard' })
                            : r.a.createElement(
                                  O.a,
                                  { container: !0, component: 'main', justify: 'center' },
                                  r.a.createElement(
                                      O.a,
                                      { item: !0, xs: 12, sm: 8, md: 4 },
                                      r.a.createElement(
                                          'div',
                                          { className: k.paper },
                                          r.a.createElement('img', {
                                              src: a(98),
                                              alt: 'avatar',
                                              width: '150',
                                              style: { padding: 30 }
                                          }),
                                          r.a.createElement(
                                              j.a,
                                              { className: k.avatar },
                                              r.a.createElement(I.a, null)
                                          ),
                                          r.a.createElement(
                                              S.a,
                                              { variant: 'h4', style: { textAlign: 'center' } },
                                              'Welcome back!'
                                          ),
                                          r.a.createElement(
                                              'form',
                                              {
                                                  onSubmit: L,
                                                  className: k.form,
                                                  noValidate: !0,
                                                  autoComplete: 'off'
                                              },
                                              T && r.a.createElement('p', null, T),
                                              r.a.createElement(C.a, {
                                                  required: !0,
                                                  fullWidth: !0,
                                                  autoFocus: !0,
                                                  margin: 'normal',
                                                  color: 'secondary',
                                                  variant: 'outlined',
                                                  type: 'email',
                                                  label: 'Email address',
                                                  value: g,
                                                  onChange: function (e) {
                                                      return f(e.target.value);
                                                  }
                                              }),
                                              r.a.createElement(C.a, {
                                                  required: !0,
                                                  fullWidth: !0,
                                                  margin: 'normal',
                                                  color: 'secondary',
                                                  variant: 'outlined',
                                                  type: 'password',
                                                  label: 'Password',
                                                  value: y,
                                                  onChange: function (e) {
                                                      return v(e.target.value);
                                                  }
                                              }),
                                              r.a.createElement(
                                                  N.a,
                                                  {
                                                      fullWidth: !0,
                                                      className: k.submit,
                                                      type: 'submit'
                                                  },
                                                  'Login'
                                              )
                                          ),
                                          r.a.createElement(
                                              S.a,
                                              { variant: 'body1', style: { marginTop: 20 } },
                                              r.a.createElement(
                                                  d.b,
                                                  { to: '/forgotPassword', className: k.link },
                                                  'Forgot password?'
                                              )
                                          ),
                                          r.a.createElement(
                                              S.a,
                                              { variant: 'body1', style: { marginTop: 20 } },
                                              "Don't have an account?",
                                              ' ',
                                              r.a.createElement(
                                                  d.b,
                                                  { to: '/register', className: k.link },
                                                  'Sign up'
                                              ),
                                              '.'
                                          )
                                      )
                                  )
                              )),
                        r.a.createElement('div', null, e)
                    );
                },
                L = function () {
                    return r.a.createElement(T, null);
                },
                W = a(82),
                R = function (e, t, a, n, r, o, c, l, i, s) {
                    return (
                        console.log(n),
                        v()({
                            method: 'POST',
                            url: '/api/auth/register',
                            data: {
                                firstName: Object(W.a)(e.toLocaleLowerCase()),
                                lastName: Object(W.a)(t.toLocaleLowerCase()),
                                email: a.toLowerCase(),
                                password: n,
                                securityAnswer1: r.toLowerCase(),
                                securityAnswer2: o.toLowerCase(),
                                securityAnswer3: c.toLowerCase(),
                                securityQuestion1: l.toLowerCase(),
                                securityQuestion2: i.toLowerCase(),
                                securityQuestion3: s.toLowerCase()
                            }
                        })
                    );
                },
                P = a(128),
                U = a.n(P),
                _ = a(22),
                F = a.n(_),
                B = function (e) {
                    return (
                        void 0 === e ||
                        null === e ||
                        ('object' === typeof e && 0 === Object.keys(e).length) ||
                        ('string' === typeof e && 0 === e.trim().length)
                    );
                },
                q = (function () {
                    var e = Object(s.a)(
                        i.a.mark(function e(t, a, n) {
                            var r;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (
                                                ((r = {}),
                                                F.a.isEmpty(t) &&
                                                    (r.firstName =
                                                        'Dewey wants to know your first name.'),
                                                F.a.isEmpty(a) &&
                                                    (r.lastName =
                                                        'Dewey wants to know your last name.'),
                                                F.a.isEmail(n) ||
                                                    (r.email =
                                                        "Dewey doesn't think this is a real email."),
                                                F.a.isEmpty(n) &&
                                                    (r.email = 'Dewey wants to know your email!.'),
                                                F.a.isEmpty(n))
                                            ) {
                                                e.next = 10;
                                                break;
                                            }
                                            return (
                                                (e.next = 8),
                                                v()({
                                                    method: 'GET',
                                                    url: '/api/auth/email/'.concat(n)
                                                })
                                            );
                                        case 8:
                                            e.sent.data.isUsed &&
                                                (r.email = 'This email is already in use.');
                                        case 10:
                                            return e.abrupt('return', { isValid: B(r), errors: r });
                                        case 11:
                                        case 'end':
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, a, n) {
                        return e.apply(this, arguments);
                    };
                })(),
                V = function (e, t) {
                    var a = {};
                    return (
                        F.a.isEmpty(e) && (a.password = 'Dewey needs a password!.'),
                        F.a.isEmpty(t) && (a.match = 'Dewey needs a confirmed password!.'),
                        F.a.equals(e, t) ||
                            ((a.password = "Dewey noticed these don't match!."),
                            (a.match = "Dewey noticed these don't match!.")),
                        F.a.isLength(e, { min: 7 }) ||
                            (a.password = 'Dewey says 7 characters or more please.'),
                        { isValid: B(a), errors: a }
                    );
                },
                G = function (e, t, a) {
                    var n = {};
                    return (
                        F.a.isEmpty(e) && (n.securityAnswer1 = 'Dewey needs an answer!.'),
                        F.a.isEmpty(t) && (n.securityAnswer2 = 'Dewey needs an answer!.'),
                        F.a.isEmpty(a) && (n.securityAnswer3 = 'Dewey needs an answer!.'),
                        { isValid: B(n), errors: n }
                    );
                },
                z = (function () {
                    var e = Object(s.a)(
                        i.a.mark(function e(t) {
                            var a;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.next = 2),
                                                v()({
                                                    method: 'GET',
                                                    url: '/api/auth/reset',
                                                    params: { resetToken: t }
                                                })
                                            );
                                        case 2:
                                            return (a = e.sent), e.abrupt('return', a);
                                        case 4:
                                        case 'end':
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                M = Object(k.a)(function (e) {
                    return {
                        link: { textDecoration: 'none', color: e.palette.secondary.main },
                        paper: {
                            margin: e.spacing(3),
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        },
                        avatar: { margin: e.spacing(1), backgroundColor: e.palette.primary.main },
                        form: { width: '100%', marginTop: e.spacing(1) },
                        submit: { margin: e.spacing(3, 0, 2), marginRight: e.spacing(2) },
                        formControl: { margin: e.spacing(1), minWidth: 120 },
                        selectEmpty: { marginTop: e.spacing(2) }
                    };
                }),
                Q = function () {
                    var e,
                        t = Object(n.useContext)(h),
                        o = t.user,
                        c = t.dispatch,
                        l = Object(n.useState)(''),
                        p = Object(u.a)(l, 2),
                        g = p[0],
                        f = p[1],
                        b = Object(n.useState)(''),
                        E = Object(u.a)(b, 2),
                        y = E[0],
                        v = E[1],
                        w = Object(n.useState)(''),
                        x = Object(u.a)(w, 2),
                        k = x[0],
                        j = x[1],
                        A = Object(n.useState)(''),
                        I = Object(u.a)(A, 2),
                        D = I[0],
                        T = I[1],
                        L = Object(n.useState)(''),
                        W = Object(u.a)(L, 2),
                        P = W[0],
                        _ = W[1],
                        F = Object(n.useState)(''),
                        B = Object(u.a)(F, 2),
                        z = B[0],
                        Q = B[1],
                        H = Object(n.useState)(''),
                        J = Object(u.a)(H, 2),
                        Y = J[0],
                        $ = J[1],
                        K = Object(n.useState)(''),
                        X = Object(u.a)(K, 2),
                        Z = X[0],
                        ee = X[1],
                        te = Object(n.useState)('What is your favorite book?'),
                        ae = Object(u.a)(te, 2),
                        ne = ae[0],
                        re = (ae[1], Object(n.useState)('What was the name of your first pet?')),
                        oe = Object(u.a)(re, 2),
                        ce = oe[0],
                        le = (oe[1], Object(n.useState)('Where were you born?')),
                        ie = Object(u.a)(le, 2),
                        se = ie[0],
                        ue = (ie[1], Object(n.useState)(1)),
                        me = Object(u.a)(ue, 2),
                        de = me[0],
                        pe = me[1],
                        ge = Object(n.useState)(!1),
                        fe = Object(u.a)(ge, 2),
                        be = fe[0],
                        he = fe[1],
                        Ee = Object(n.useState)({}),
                        ye = Object(u.a)(Ee, 2),
                        ve = ye[0],
                        we = ye[1],
                        xe = M(),
                        ke = o.loggedIn,
                        Oe = o.registered,
                        je = o.message,
                        Se = (function () {
                            var e = Object(s.a)(
                                i.a.mark(function e(t) {
                                    var a;
                                    return i.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            t.preventDefault(),
                                                            (e.prev = 1),
                                                            (e.next = 4),
                                                            R(g, y, k, D, z, Y, Z, ne, ce, se)
                                                        );
                                                    case 4:
                                                        (a = e.sent),
                                                            c({
                                                                type: 'REGISTER_SUCCESS',
                                                                payload: { message: a.data.data }
                                                            }),
                                                            (e.next = 11);
                                                        break;
                                                    case 8:
                                                        (e.prev = 8),
                                                            (e.t0 = e.catch(1)),
                                                            c({
                                                                type: 'REGISTER_FAILURE',
                                                                payload: {
                                                                    message: e.t0.response.data.data
                                                                }
                                                            });
                                                    case 11:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[1, 8]]
                                    );
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Ce = (function () {
                            var e = Object(s.a)(
                                i.a.mark(function e() {
                                    var t;
                                    return i.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), q(g, y, k);
                                                case 2:
                                                    (t = e.sent).isValid
                                                        ? (we({}), pe(de + 1))
                                                        : we(t.errors);
                                                case 4:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function () {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Ne = (function () {
                            var e = Object(s.a)(
                                i.a.mark(function e() {
                                    var t;
                                    return i.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), V(D, P);
                                                case 2:
                                                    (t = e.sent).isValid
                                                        ? (we({}), pe(de + 1))
                                                        : we(t.errors);
                                                case 4:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function () {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Ae = (function () {
                            var e = Object(s.a)(
                                i.a.mark(function e() {
                                    var t;
                                    return i.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), G(z, Y, Z);
                                                case 2:
                                                    (t = e.sent).isValid
                                                        ? (we({}), pe(de + 1))
                                                        : we(t.errors);
                                                case 4:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function () {
                                return e.apply(this, arguments);
                            };
                        })();
                    return (
                        (e =
                            ke || Oe
                                ? r.a.createElement(m.a, { to: '/' })
                                : r.a.createElement(
                                      O.a,
                                      { container: !0, component: 'main', justify: 'center' },
                                      r.a.createElement(
                                          O.a,
                                          { item: !0, xs: 12, sm: 8, md: 4 },
                                          r.a.createElement(
                                              'div',
                                              { className: xe.paper },
                                              r.a.createElement('img', {
                                                  src: a(98),
                                                  alt: 'avatar',
                                                  width: '150'
                                              }),
                                              r.a.createElement(
                                                  S.a,
                                                  {
                                                      variant: 'h4',
                                                      gutterBottom: !0,
                                                      style: { textAlign: 'center' }
                                                  },
                                                  'Welcome!'
                                              ),
                                              r.a.createElement(
                                                  'form',
                                                  {
                                                      className: xe.form,
                                                      noValidate: !0,
                                                      autoComplete: 'off'
                                                  },
                                                  je && r.a.createElement('p', null, je),
                                                  (function (e) {
                                                      switch (e) {
                                                          case 1:
                                                              return r.a.createElement(
                                                                  r.a.Fragment,
                                                                  null,
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      {
                                                                          variant: 'body1',
                                                                          gutterBottom: !0
                                                                      },
                                                                      'Enter your details below to get started.'
                                                                  ),
                                                                  r.a.createElement(C.a, {
                                                                      error: ve.firstName,
                                                                      helperText:
                                                                          ve.firstName &&
                                                                          ve.firstName,
                                                                      required: !0,
                                                                      fullWidth: !0,
                                                                      autoFocus: !0,
                                                                      margin: 'normal',
                                                                      color: 'secondary',
                                                                      variant: 'outlined',
                                                                      type: 'text',
                                                                      label: 'First name',
                                                                      value: g,
                                                                      onChange: function (e) {
                                                                          return f(e.target.value);
                                                                      }
                                                                  }),
                                                                  r.a.createElement(C.a, {
                                                                      error: ve.lastName,
                                                                      helperText:
                                                                          ve.lastName &&
                                                                          ve.lastName,
                                                                      required: !0,
                                                                      fullWidth: !0,
                                                                      margin: 'normal',
                                                                      color: 'secondary',
                                                                      variant: 'outlined',
                                                                      type: 'text',
                                                                      label: 'Last name',
                                                                      value: y,
                                                                      onChange: function (e) {
                                                                          return v(e.target.value);
                                                                      }
                                                                  }),
                                                                  r.a.createElement(C.a, {
                                                                      error: ve.email,
                                                                      helperText:
                                                                          ve.email && ve.email,
                                                                      required: !0,
                                                                      fullWidth: !0,
                                                                      margin: 'normal',
                                                                      color: 'secondary',
                                                                      variant: 'outlined',
                                                                      type: 'email',
                                                                      label: 'Email address',
                                                                      value: k,
                                                                      onChange: function (e) {
                                                                          return j(e.target.value);
                                                                      }
                                                                  }),
                                                                  r.a.createElement(
                                                                      N.a,
                                                                      {
                                                                          className: xe.submit,
                                                                          onClick: Ce
                                                                      },
                                                                      'Continue'
                                                                  ),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      {
                                                                          variant: 'body1',
                                                                          style: { marginTop: 20 }
                                                                      },
                                                                      'Already have an account?',
                                                                      ' ',
                                                                      r.a.createElement(
                                                                          d.b,
                                                                          {
                                                                              to: '/',
                                                                              className: xe.link
                                                                          },
                                                                          'Login'
                                                                      ),
                                                                      '.'
                                                                  )
                                                              );
                                                          case 2:
                                                              return r.a.createElement(
                                                                  r.a.Fragment,
                                                                  null,
                                                                  r.a.createElement(C.a, {
                                                                      error: ve.password,
                                                                      helperText:
                                                                          ve.password &&
                                                                          ve.password,
                                                                      required: !0,
                                                                      fullWidth: !0,
                                                                      margin: 'normal',
                                                                      color: 'secondary',
                                                                      variant: 'outlined',
                                                                      type: 'password',
                                                                      label: 'Password',
                                                                      value: D,
                                                                      onChange: function (e) {
                                                                          return T(e.target.value);
                                                                      }
                                                                  }),
                                                                  r.a.createElement(U.a, {
                                                                      password: D,
                                                                      scoreWords: [
                                                                          '',
                                                                          "Password strength: Dewey doesn't like it!",
                                                                          'Password strength: Dewey will tolerate it.',
                                                                          'Password strength: Dewey likes it.',
                                                                          'Password strength: Dewey is love with your password. \ud83e\udd96'
                                                                      ],
                                                                      shortScoreWord:
                                                                          "Password strength: Dewey doesn't like it!"
                                                                  }),
                                                                  r.a.createElement(C.a, {
                                                                      error: ve.match,
                                                                      helperText:
                                                                          ve.match && ve.match,
                                                                      required: !0,
                                                                      fullWidth: !0,
                                                                      margin: 'normal',
                                                                      color: 'secondary',
                                                                      variant: 'outlined',
                                                                      type: 'password',
                                                                      label: 'Confirm password',
                                                                      value: P,
                                                                      onChange: function (e) {
                                                                          return _(e.target.value);
                                                                      }
                                                                  }),
                                                                  r.a.createElement(
                                                                      N.a,
                                                                      {
                                                                          className: xe.submit,
                                                                          onClick: function () {
                                                                              return pe(e - 1);
                                                                          }
                                                                      },
                                                                      'Back'
                                                                  ),
                                                                  r.a.createElement(
                                                                      N.a,
                                                                      {
                                                                          className: xe.submit,
                                                                          onClick: Ne
                                                                      },
                                                                      'Continue'
                                                                  )
                                                              );
                                                          case 3:
                                                              return r.a.createElement(
                                                                  r.a.Fragment,
                                                                  null,
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      {
                                                                          variant: 'subtitle1',
                                                                          gutterBottom: !0
                                                                      },
                                                                      "Dewey likes to keep things secure, and he'll help you get a new password if you forget it. Go ahead and tell him the answers to the following questions."
                                                                  ),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      { variant: 'body1' },
                                                                      ne
                                                                  ),
                                                                  r.a.createElement(C.a, {
                                                                      error: ve.securityAnswer1,
                                                                      helperText:
                                                                          ve.securityAnswer1 &&
                                                                          ve.securityAnswer1,
                                                                      required: !0,
                                                                      fullWidth: !0,
                                                                      margin: 'normal',
                                                                      color: 'secondary',
                                                                      variant: 'outlined',
                                                                      type: 'text',
                                                                      label: 'Security Question #1',
                                                                      value: z,
                                                                      onChange: function (e) {
                                                                          return Q(e.target.value);
                                                                      },
                                                                      style: { marginBottom: 20 }
                                                                  }),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      { variant: 'body1' },
                                                                      ce
                                                                  ),
                                                                  r.a.createElement(C.a, {
                                                                      error: ve.securityAnswer2,
                                                                      helperText:
                                                                          ve.securityAnswer2 &&
                                                                          ve.securityAnswer2,
                                                                      required: !0,
                                                                      fullWidth: !0,
                                                                      margin: 'normal',
                                                                      color: 'secondary',
                                                                      variant: 'outlined',
                                                                      type: 'text',
                                                                      label: 'Security Question #2',
                                                                      value: Y,
                                                                      onChange: function (e) {
                                                                          return $(e.target.value);
                                                                      },
                                                                      style: { marginBottom: 20 }
                                                                  }),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      { variant: 'body1' },
                                                                      se
                                                                  ),
                                                                  r.a.createElement(C.a, {
                                                                      error: ve.securityAnswer3,
                                                                      helperText:
                                                                          ve.securityAnswer3 &&
                                                                          ve.securityAnswer3,
                                                                      required: !0,
                                                                      fullWidth: !0,
                                                                      margin: 'normal',
                                                                      color: 'secondary',
                                                                      variant: 'outlined',
                                                                      type: 'text',
                                                                      label: 'Security Question #3',
                                                                      value: Z,
                                                                      onChange: function (e) {
                                                                          return ee(e.target.value);
                                                                      },
                                                                      style: { marginBottom: 20 }
                                                                  }),
                                                                  r.a.createElement(
                                                                      N.a,
                                                                      {
                                                                          className: xe.submit,
                                                                          onClick: function () {
                                                                              return pe(e - 1);
                                                                          }
                                                                      },
                                                                      'Back'
                                                                  ),
                                                                  r.a.createElement(
                                                                      N.a,
                                                                      {
                                                                          className: xe.submit,
                                                                          onClick: Ae
                                                                      },
                                                                      'Continue'
                                                                  )
                                                              );
                                                          case 4:
                                                              return r.a.createElement(
                                                                  r.a.Fragment,
                                                                  null,
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      {
                                                                          variant: 'subtitle1',
                                                                          gutterBottom: !0
                                                                      },
                                                                      "Roarrr! I think we're ready to get started."
                                                                  ),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      { variant: 'body1' },
                                                                      r.a.createElement(
                                                                          'strong',
                                                                          null,
                                                                          'First name:'
                                                                      ),
                                                                      ' ',
                                                                      g
                                                                  ),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      { variant: 'body1' },
                                                                      r.a.createElement(
                                                                          'strong',
                                                                          null,
                                                                          'Last name:'
                                                                      ),
                                                                      ' ',
                                                                      y
                                                                  ),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      { variant: 'body1' },
                                                                      r.a.createElement(
                                                                          'strong',
                                                                          null,
                                                                          'Email:'
                                                                      ),
                                                                      ' ',
                                                                      k
                                                                  ),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      { variant: 'body1' },
                                                                      r.a.createElement(
                                                                          'strong',
                                                                          null,
                                                                          'Password:'
                                                                      ),
                                                                      ' ',
                                                                      be ? D : D.replace(/./g, '*'),
                                                                      r.a.createElement(
                                                                          'span',
                                                                          {
                                                                              style: {
                                                                                  color: '#5f27cd',
                                                                                  fontSize:
                                                                                      '0.6rem',
                                                                                  fontWeight: '600',
                                                                                  textTransform:
                                                                                      'uppercase',
                                                                                  marginLeft: 10,
                                                                                  cursor: 'pointer'
                                                                              },
                                                                              onClick: function () {
                                                                                  return he(!be);
                                                                              }
                                                                          },
                                                                          ' ',
                                                                          be ? 'hide' : 'show',
                                                                          ' '
                                                                      )
                                                                  ),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      { variant: 'body1' },
                                                                      r.a.createElement(
                                                                          'strong',
                                                                          null,
                                                                          ne,
                                                                          ':'
                                                                      ),
                                                                      ' ',
                                                                      z
                                                                  ),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      { variant: 'body1' },
                                                                      r.a.createElement(
                                                                          'strong',
                                                                          null,
                                                                          ce,
                                                                          ':'
                                                                      ),
                                                                      ' ',
                                                                      Y
                                                                  ),
                                                                  r.a.createElement(
                                                                      S.a,
                                                                      { variant: 'body1' },
                                                                      r.a.createElement(
                                                                          'strong',
                                                                          null,
                                                                          se,
                                                                          ':'
                                                                      ),
                                                                      ' ',
                                                                      Z
                                                                  ),
                                                                  r.a.createElement(
                                                                      N.a,
                                                                      {
                                                                          fullWidth: !0,
                                                                          className: xe.submit,
                                                                          onClick: Se
                                                                      },
                                                                      'Confirm & Register'
                                                                  ),
                                                                  r.a.createElement(
                                                                      N.a,
                                                                      {
                                                                          className: xe.submit,
                                                                          onClick: function () {
                                                                              return pe(e - 1);
                                                                          }
                                                                      },
                                                                      'Back'
                                                                  )
                                                              );
                                                      }
                                                  })(de)
                                              )
                                          )
                                      )
                                  )),
                        r.a.createElement('div', null, e)
                    );
                },
                H = function () {
                    return r.a.createElement(Q, null);
                },
                J = a(361),
                Y = a(373),
                $ = a(369),
                K = a(374),
                X = a(363),
                Z = a(364),
                ee = a(365),
                te = function (e, t) {
                    return v()({
                        method: 'GET',
                        url: '/api/book/search/'.concat(e, '?searchType=').concat(t)
                    });
                },
                ae = function (e) {
                    return v()({ method: 'POST', url: '/api/book/create', data: e });
                },
                ne = Object(k.a)(function (e) {
                    return {
                        card: {
                            margin: e.spacing(2, 1),
                            padding: e.spacing(0.5),
                            display: 'flex',
                            justifyContent: 'space-between'
                        }
                    };
                }),
                re = function (e) {
                    var t = e.book,
                        a = ne(),
                        o = Object(n.useState)(''),
                        c = Object(u.a)(o, 2),
                        l = c[0],
                        m = c[1],
                        d = (function () {
                            var e = Object(s.a)(
                                i.a.mark(function e() {
                                    var a, n;
                                    return i.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        {
                                                            isbn: t.isbn,
                                                            bookName: t.bookName,
                                                            bookAuthor: t.bookAuthor,
                                                            bookImg: t.bookImg,
                                                            bookDesc: t.bookDesc
                                                        },
                                                        (e.next = 3),
                                                        ae(t)
                                                    );
                                                case 3:
                                                    return (
                                                        (a = e.sent),
                                                        (e.next = 6),
                                                        (r = { bookId: a.data.book.id }),
                                                        v()({
                                                            method: 'POST',
                                                            url: '/api/book',
                                                            data: r
                                                        })
                                                    );
                                                case 6:
                                                    (n = e.sent), m(n.data.msg);
                                                case 8:
                                                case 'end':
                                                    return e.stop();
                                            }
                                        var r;
                                    }, e);
                                })
                            );
                            return function () {
                                return e.apply(this, arguments);
                            };
                        })();
                    return r.a.createElement(
                        X.a,
                        { className: a.card },
                        r.a.createElement(
                            Z.a,
                            { style: { width: 600, maxWidth: '80%' } },
                            r.a.createElement(S.a, { variant: 'h5', component: 'h2' }, t.bookName),
                            r.a.createElement(
                                S.a,
                                { className: a.pos, color: 'textSecondary' },
                                JSON.parse(t.bookAuthor).join(', ')
                            ),
                            r.a.createElement(
                                S.a,
                                { variant: 'body2' },
                                (function (e, t) {
                                    if (e) return e.length <= t ? e : e.slice(0, t) + '...';
                                })(t.bookDesc, 280)
                            )
                        ),
                        r.a.createElement(
                            ee.a,
                            { style: { flexDirection: 'column', alignItems: 'flex-end' } },
                            r.a.createElement(N.a, { onClick: d, gutterBottom: !0 }, 'Save'),
                            l && r.a.createElement(S.a, { variant: 'caption' }, l)
                        )
                    );
                },
                oe = a(129),
                ce = a.n(oe),
                le = a(138),
                ie = a(131),
                se = a.n(ie),
                ue = Object(le.a)({
                    wrapper: { position: 'relative', overflow: 'hidden', display: 'inline-block' },
                    button: { boxShadow: 'none !important', width: 150 },
                    input: { fontSize: '100px', position: 'absolute', left: 0, top: 0, opacity: 0 }
                }),
                me = function (e) {
                    var t = ue(),
                        a = Object(n.useRef)(null);
                    return r.a.createElement(
                        'div',
                        { className: t.wrapper },
                        r.a.createElement(
                            N.a,
                            { className: t.button },
                            r.a.createElement(se.a, null)
                        ),
                        r.a.createElement('input', {
                            type: 'file',
                            accept: 'image/*',
                            capture: 'camera',
                            ref: a,
                            onChange: function () {
                                var t = URL.createObjectURL(a.current.files[0]);
                                ce.a.decodeSingle(
                                    {
                                        decoder: { readers: ['ean_reader'] },
                                        facingMode: 'environment',
                                        locate: !0,
                                        src: t
                                    },
                                    function (t) {
                                        console.log(t),
                                            t.codeResult
                                                ? e.handleDetected(Object(p.a)({ success: !0 }, t))
                                                : e.handleDetected({
                                                      success: !1,
                                                      data: 'Not detected.'
                                                  });
                                    }
                                );
                            },
                            className: t.input
                        })
                    );
                },
                de = Object(k.a)(function (e) {
                    return {
                        root: { '& > *': { width: '100%', margin: e.spacing(0, 2, 2, 0) } },
                        '@media (min-width: 768px)': { largeForm: { width: 300 } }
                    };
                }),
                pe = function () {
                    var e = de(),
                        t = Object(n.useState)(''),
                        a = Object(u.a)(t, 2),
                        o = a[0],
                        c = a[1],
                        l = Object(n.useState)(''),
                        m = Object(u.a)(l, 2),
                        d = m[0],
                        p = m[1],
                        g = Object(n.useState)(''),
                        f = Object(u.a)(g, 2),
                        b = f[0],
                        h = f[1],
                        E = Object(n.useState)([]),
                        y = Object(u.a)(E, 2),
                        v = y[0],
                        w = y[1],
                        x = Object(n.useState)(''),
                        k = Object(u.a)(x, 2),
                        O =
                            (k[0],
                            k[1],
                            (function () {
                                var e = Object(s.a)(
                                    i.a.mark(function e(t) {
                                        var a;
                                        return i.a.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                t.preventDefault(),
                                                                c(''),
                                                                w([]),
                                                                (e.prev = 3),
                                                                (e.next = 6),
                                                                te(b, d)
                                                            );
                                                        case 6:
                                                            (a = e.sent),
                                                                console.log(b, d),
                                                                w(a.data.data),
                                                                (e.next = 14);
                                                            break;
                                                        case 11:
                                                            (e.prev = 11),
                                                                (e.t0 = e.catch(3)),
                                                                console.log('error', e.t0);
                                                        case 14:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[3, 11]]
                                        );
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })());
                    return r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(me, {
                            handleDetected: function (e) {
                                if (!e) return null;
                                e.success
                                    ? (p('isbn'),
                                      h(e.codeResult.code),
                                      console.log(e.codeResult.code))
                                    : (console.log(e),
                                      c(
                                          'Your volume could not be found via scan. Please try a manual search.'
                                      ));
                            }
                        }),
                        r.a.createElement(
                            'form',
                            { onSubmit: O },
                            r.a.createElement(
                                J.a,
                                {
                                    fullWidth: !0,
                                    className: e.root,
                                    variant: 'outlined',
                                    color: 'secondary',
                                    noValidate: !0,
                                    autoComplete: 'off',
                                    style: { flexDirection: 'row', flexWrap: 'wrap' }
                                },
                                r.a.createElement(Y.a, { id: 'search-type' }, 'Search type'),
                                r.a.createElement(
                                    $.a,
                                    {
                                        className: e.largeForm,
                                        label: 'Search type',
                                        labelId: 'search-type',
                                        id: 'search-type',
                                        value: d,
                                        onChange: function (e) {
                                            p(e.target.value);
                                        }
                                    },
                                    r.a.createElement(K.a, { value: 'isbn' }, 'ISBN'),
                                    r.a.createElement(K.a, { value: 'author' }, 'Author name'),
                                    r.a.createElement(K.a, { value: 'title' }, 'Book title')
                                ),
                                '' !== d &&
                                    r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(C.a, {
                                            fullWidth: !0,
                                            id: 'outlined-basic',
                                            label: 'Search',
                                            variant: 'outlined',
                                            color: 'secondary',
                                            onChange: function (e) {
                                                return h(e.target.value);
                                            },
                                            value: b,
                                            className: e.largeForm
                                        }),
                                        r.a.createElement(
                                            N.a,
                                            { className: e.largeForm, type: 'submit' },
                                            'Search'
                                        )
                                    )
                            )
                        ),
                        r.a.createElement(S.a, { variant: 'body1' }, o && o),
                        v.length > 0 &&
                            r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(
                                    N.a,
                                    {
                                        onClick: function () {
                                            w([]), p(''), h('');
                                        }
                                    },
                                    'Clear Search'
                                ),
                                r.a.createElement(
                                    S.a,
                                    { variant: 'body1' },
                                    'Search results: ',
                                    v.length
                                )
                            ),
                        v.map(function (e) {
                            return r.a.createElement(re, { book: e, key: e.isbn });
                        })
                    );
                },
                ge = Object(k.a)(function (e) {
                    return {
                        link: {
                            textDecoration: 'none',
                            color: e.palette.secondary.main,
                            cursor: 'pointer'
                        }
                    };
                }),
                fe = function () {
                    var e,
                        t = Object(n.useContext)(h).user.loggedIn;
                    ge();
                    return (
                        (e = t
                            ? r.a.createElement(
                                  'div',
                                  null,
                                  r.a.createElement(
                                      S.a,
                                      { variant: 'h3', gutterBottom: !0 },
                                      'Dashboard'
                                  ),
                                  r.a.createElement(pe, null)
                              )
                            : r.a.createElement(m.a, { to: '/' })),
                        r.a.createElement('div', null, e)
                    );
                },
                be = function (e) {
                    return v()({
                        method: 'PATCH',
                        url: '/api/auth/password',
                        data: { password: e }
                    });
                },
                he = Object(k.a)(function (e) {
                    return {
                        link: { textDecoration: 'none', color: e.palette.secondary.main },
                        avatar: { margin: e.spacing(1), backgroundColor: e.palette.primary.main },
                        form: { width: '100%', marginTop: e.spacing(1) },
                        submit: { margin: e.spacing(3, 0, 2) },
                        cancel: { margin: e.spacing(3, 0, 2), float: 'right' }
                    };
                }),
                Ee = function (e) {
                    var t,
                        a = Object(n.useContext)(h),
                        o = a.user,
                        c = a.dispatch,
                        l = ('Bearer '.concat(o.token), Object(n.useState)('')),
                        m = Object(u.a)(l, 2),
                        d = m[0],
                        p = m[1],
                        g = Object(n.useState)(''),
                        f = Object(u.a)(g, 2),
                        b = f[0],
                        E = f[1],
                        y = he(),
                        v = o.message,
                        w = (function () {
                            var e = Object(s.a)(
                                i.a.mark(function e(t) {
                                    var a;
                                    return i.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if ((t.preventDefault(), d !== b)) {
                                                            e.next = 19;
                                                            break;
                                                        }
                                                        return (e.prev = 2), (e.next = 5), be(d);
                                                    case 5:
                                                        (a = e.sent),
                                                            console.log(a),
                                                            c({
                                                                type: 'UPDATE_PASSWORD_SUCCESS',
                                                                payload: {
                                                                    message: a.data.msg,
                                                                    payload: { token: a.data.token }
                                                                }
                                                            }),
                                                            p(''),
                                                            E(''),
                                                            (e.next = 17);
                                                        break;
                                                    case 12:
                                                        (e.prev = 12),
                                                            (e.t0 = e.catch(2)),
                                                            c({
                                                                type: 'UPDATE_PASSWORD_FAILURE',
                                                                payload: {
                                                                    message: e.t0.response.data.data
                                                                }
                                                            }),
                                                            p(''),
                                                            E('');
                                                    case 17:
                                                        e.next = 22;
                                                        break;
                                                    case 19:
                                                        c({
                                                            type: 'UPDATE_PASSWORD_FAILURE',
                                                            payload: {
                                                                message: "Passwords don't match."
                                                            }
                                                        }),
                                                            p(''),
                                                            E('');
                                                    case 22:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[2, 12]]
                                    );
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                    return (
                        (t = r.a.createElement(
                            O.a,
                            { container: !0, component: 'main' },
                            r.a.createElement(
                                O.a,
                                { item: !0, xs: 12, sm: 8, md: 4 },
                                r.a.createElement(
                                    'div',
                                    null,
                                    r.a.createElement(
                                        S.a,
                                        {
                                            variant: 'h5',
                                            gutterBottom: !0,
                                            style: { textAlign: 'left' }
                                        },
                                        'Update Password'
                                    ),
                                    r.a.createElement(
                                        'form',
                                        {
                                            onSubmit: w,
                                            className: y.form,
                                            noValidate: !0,
                                            autoComplete: 'off'
                                        },
                                        v && r.a.createElement('p', null, v),
                                        r.a.createElement(C.a, {
                                            required: !0,
                                            fullWidth: !0,
                                            margin: 'normal',
                                            color: 'secondary',
                                            variant: 'outlined',
                                            type: 'password',
                                            label: 'Password',
                                            size: 'small',
                                            value: d,
                                            onChange: function (e) {
                                                return p(e.target.value);
                                            }
                                        }),
                                        r.a.createElement(C.a, {
                                            required: !0,
                                            fullWidth: !0,
                                            margin: 'normal',
                                            color: 'secondary',
                                            variant: 'outlined',
                                            type: 'password',
                                            label: 'Confirm password',
                                            size: 'small',
                                            value: b,
                                            onChange: function (e) {
                                                return E(e.target.value);
                                            }
                                        }),
                                        r.a.createElement('br', null),
                                        r.a.createElement(
                                            N.a,
                                            { fullWidth: !0, className: y.submit, type: 'submit' },
                                            'Update'
                                        )
                                    )
                                )
                            )
                        )),
                        r.a.createElement('div', null, t)
                    );
                },
                ye = function () {
                    var e,
                        t = Object(n.useContext)(h).user;
                    return (
                        (e = t.loggedIn
                            ? r.a.createElement(
                                  'div',
                                  null,
                                  r.a.createElement(S.a, { variant: 'h3' }, 'Account Details'),
                                  r.a.createElement(
                                      S.a,
                                      { variant: 'body1' },
                                      'First name: ',
                                      t.firstName
                                  ),
                                  r.a.createElement(
                                      S.a,
                                      { variant: 'body1' },
                                      'Last name: ',
                                      t.lastName
                                  ),
                                  r.a.createElement(S.a, { variant: 'body1' }, 'Email: ', t.email),
                                  r.a.createElement(S.a, { variant: 'h3' }, 'Account'),
                                  r.a.createElement(Ee, null)
                              )
                            : r.a.createElement(m.a, { to: '/' })),
                        r.a.createElement('div', null, e)
                    );
                },
                ve = a(132),
                we = a.n(ve),
                xe = Object(k.a)(function (e) {
                    return {
                        card: { margin: e.spacing(2, 1), padding: e.spacing(1) },
                        cardContent: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }
                    };
                }),
                ke = function () {
                    var e = xe(),
                        t = Object(n.useState)([]),
                        a = Object(u.a)(t, 2),
                        o = a[0],
                        c = a[1];
                    return (
                        Object(n.useEffect)(function () {
                            (function () {
                                var e = Object(s.a)(
                                    i.a.mark(function e() {
                                        var t;
                                        return i.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.next = 2), v.a.get('/api/user/books')
                                                        );
                                                    case 2:
                                                        (t = e.sent), c(t.data.data);
                                                    case 4:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })()();
                        }, []),
                        r.a.createElement(
                            'div',
                            null,
                            r.a.createElement(S.a, { variant: 'h3' }, 'Library'),
                            r.a.createElement(
                                we.a,
                                { columnWidth: 300 },
                                o.map(function (t) {
                                    return r.a.createElement(
                                        X.a,
                                        { className: e.card, key: t.id },
                                        r.a.createElement(
                                            Z.a,
                                            { className: e.cardContent },
                                            r.a.createElement('img', {
                                                src: t.bookImg,
                                                alt: ''.concat(t.bookTitle, ' cover')
                                            }),
                                            r.a.createElement('p', null, t.bookName),
                                            r.a.createElement(
                                                S.a,
                                                { color: 'textSecondary' },
                                                JSON.parse(t.bookAuthor).join(', ')
                                            )
                                        )
                                    );
                                })
                            )
                        )
                    );
                },
                Oe =
                    (a(317),
                    function () {
                        var e = Object(m.g)();
                        return r.a.createElement(
                            'div',
                            {
                                style: {
                                    paddingTop: 50,
                                    paddingBottom: 50,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }
                            },
                            r.a.createElement(
                                'div',
                                { style: { fontSize: 200 } },
                                '4',
                                r.a.createElement('img', {
                                    src: a(318),
                                    height: '200',
                                    className: 'error-dewey',
                                    alt: 'crying dinosaur logo'
                                }),
                                '4'
                            ),
                            r.a.createElement(
                                'div',
                                null,
                                r.a.createElement(
                                    S.a,
                                    {
                                        variant: 'h4',
                                        style: { marginTop: 30, textAlign: 'center' }
                                    },
                                    'Error: 404 page not found.'
                                ),
                                r.a.createElement(
                                    S.a,
                                    {
                                        variant: 'subtitle1',
                                        style: { marginBottom: 30, textAlign: 'center' }
                                    },
                                    "Sorry, Dewey can't find that page."
                                ),
                                r.a.createElement(
                                    N.a,
                                    {
                                        fullWidth: !0,
                                        onClick: function () {
                                            return e.push('/');
                                        }
                                    },
                                    'Go back home'
                                )
                            )
                        );
                    }),
                je = function (e, t) {
                    return v()({
                        method: 'POST',
                        url: '/api/auth/forgotPassword',
                        data: { email: e }
                    });
                },
                Se = Object(k.a)(function (e) {
                    return {
                        link: { textDecoration: 'none', color: e.palette.secondary.main },
                        paper: {
                            margin: e.spacing(3),
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        },
                        avatar: { margin: e.spacing(1), backgroundColor: e.palette.primary.main },
                        form: { width: '100%', marginTop: e.spacing(1) },
                        submit: { margin: e.spacing(3, 0, 2) }
                    };
                }),
                Ce = function () {
                    var e = Object(n.useContext)(h),
                        t = e.user,
                        o = e.dispatch,
                        c = Object(n.useState)(''),
                        l = Object(u.a)(c, 2),
                        m = l[0],
                        p = l[1],
                        g = Se(),
                        f = t.message,
                        b = (function () {
                            var e = Object(s.a)(
                                i.a.mark(function e(t) {
                                    var a;
                                    return i.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            t.preventDefault(),
                                                            (e.prev = 1),
                                                            (e.next = 4),
                                                            je(m)
                                                        );
                                                    case 4:
                                                        (a = e.sent),
                                                            o({
                                                                type: 'RESET_EMAIL_SUCCESS',
                                                                payload: { message: a.data.msg }
                                                            }),
                                                            p(''),
                                                            (e.next = 13);
                                                        break;
                                                    case 9:
                                                        (e.prev = 9),
                                                            (e.t0 = e.catch(1)),
                                                            o({
                                                                type: 'RESET_EMAIL_FAILURE',
                                                                payload: {
                                                                    message: e.t0.response.data.msg
                                                                }
                                                            }),
                                                            p('');
                                                    case 13:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[1, 9]]
                                    );
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                    return r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(
                            O.a,
                            { container: !0, component: 'main', justify: 'center' },
                            r.a.createElement(
                                O.a,
                                { item: !0, xs: 12, sm: 8, md: 4 },
                                r.a.createElement(
                                    'div',
                                    { className: g.paper },
                                    r.a.createElement('img', {
                                        src: a(319),
                                        alt: 'avatar',
                                        width: '150',
                                        style: { padding: 30 }
                                    }),
                                    r.a.createElement(
                                        S.a,
                                        { variant: 'h4', style: { textAlign: 'center' } },
                                        'Password Reset Email'
                                    ),
                                    r.a.createElement(
                                        'form',
                                        {
                                            onSubmit: b,
                                            className: g.form,
                                            noValidate: !0,
                                            autoComplete: 'off'
                                        },
                                        r.a.createElement(
                                            S.a,
                                            {
                                                variant: 'body1',
                                                style: { margin: '20px 0', textAlign: 'center' }
                                            },
                                            'Dewey understands. Sometimes you forget.',
                                            r.a.createElement('br', null),
                                            r.a.createElement(
                                                S.a,
                                                { variant: 'caption' },
                                                r.a.createElement(
                                                    'em',
                                                    null,
                                                    'Dewey forgot to take out the trash this morning.'
                                                )
                                            )
                                        ),
                                        f &&
                                            r.a.createElement(
                                                S.a,
                                                {
                                                    variant: 'body1',
                                                    className: g.link,
                                                    style: { margin: '20px 0', textAlign: 'center' }
                                                },
                                                f
                                            ),
                                        r.a.createElement(C.a, {
                                            required: !0,
                                            fullWidth: !0,
                                            autoFocus: !0,
                                            margin: 'normal',
                                            color: 'secondary',
                                            variant: 'outlined',
                                            type: 'email',
                                            label: 'Email address',
                                            value: m,
                                            onChange: function (e) {
                                                return p(e.target.value);
                                            }
                                        }),
                                        r.a.createElement(
                                            N.a,
                                            { fullWidth: !0, className: g.submit, type: 'submit' },
                                            'Send Reset Email'
                                        )
                                    ),
                                    r.a.createElement(
                                        S.a,
                                        { variant: 'body1', style: { marginTop: 20 } },
                                        'Have an account?',
                                        ' ',
                                        r.a.createElement(
                                            d.b,
                                            { to: '/', className: g.link },
                                            'Login Here'
                                        ),
                                        '.'
                                    )
                                )
                            )
                        )
                    );
                },
                Ne = function () {
                    return r.a.createElement(Ce, null);
                },
                Ae = function (e, t) {
                    return v()({
                        method: 'PATCH',
                        url: '/api/auth/reset',
                        params: { resetToken: t },
                        data: { password: e }
                    });
                },
                Ie = Object(k.a)(function (e) {
                    return {
                        link: { textDecoration: 'none', color: e.palette.secondary.main },
                        avatar: { margin: e.spacing(1), backgroundColor: e.palette.primary.main },
                        form: { width: '100%', marginTop: e.spacing(1) },
                        submit: { margin: e.spacing(3, 0, 2) },
                        cancel: { margin: e.spacing(3, 0, 2), float: 'right' }
                    };
                }),
                De = function (e) {
                    var t,
                        a = Object(n.useContext)(h),
                        o = (a.user, a.dispatch, e.token),
                        c = Object(n.useState)(''),
                        l = Object(u.a)(c, 2),
                        m = l[0],
                        p = l[1],
                        g = Object(n.useState)(''),
                        f = Object(u.a)(g, 2),
                        b = f[0],
                        E = f[1],
                        y = Object(n.useState)(''),
                        v = Object(u.a)(y, 2),
                        w = v[0],
                        x = v[1],
                        k = Object(n.useState)(''),
                        O = Object(u.a)(k, 2),
                        j = O[0],
                        A = O[1],
                        I = Ie(),
                        D = (function () {
                            var e = Object(s.a)(
                                i.a.mark(function e(t) {
                                    var a;
                                    return i.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if ((t.preventDefault(), m !== b)) {
                                                            e.next = 19;
                                                            break;
                                                        }
                                                        return (e.prev = 2), (e.next = 5), Ae(m, o);
                                                    case 5:
                                                        (a = e.sent),
                                                            A(a.data.msg),
                                                            p(''),
                                                            E(''),
                                                            x(!0),
                                                            (e.next = 17);
                                                        break;
                                                    case 12:
                                                        (e.prev = 12),
                                                            (e.t0 = e.catch(2)),
                                                            A(e.t0.response.data.msg),
                                                            p(''),
                                                            E('');
                                                    case 17:
                                                        e.next = 22;
                                                        break;
                                                    case 19:
                                                        A("Passwords don't match."), p(''), E('');
                                                    case 22:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[2, 12]]
                                    );
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                    return (
                        (t = w
                            ? r.a.createElement(
                                  S.a,
                                  { variant: 'body1', style: { marginTop: 20 } },
                                  r.a.createElement(
                                      d.b,
                                      { to: '/', className: I.link },
                                      'Return to Login'
                                  ),
                                  '.'
                              )
                            : r.a.createElement(
                                  'div',
                                  null,
                                  r.a.createElement(
                                      S.a,
                                      {
                                          variant: 'h5',
                                          gutterBottom: !0,
                                          style: { textAlign: 'left' }
                                      },
                                      'Update Password'
                                  ),
                                  r.a.createElement(
                                      'form',
                                      {
                                          onSubmit: D,
                                          className: I.form,
                                          noValidate: !0,
                                          autoComplete: 'off'
                                      },
                                      r.a.createElement(C.a, {
                                          required: !0,
                                          fullWidth: !0,
                                          autoFocus: !0,
                                          margin: 'normal',
                                          color: 'secondary',
                                          variant: 'outlined',
                                          type: 'password',
                                          label: 'Password',
                                          value: m,
                                          onChange: function (e) {
                                              return p(e.target.value);
                                          }
                                      }),
                                      r.a.createElement(C.a, {
                                          required: !0,
                                          fullWidth: !0,
                                          margin: 'normal',
                                          color: 'secondary',
                                          variant: 'outlined',
                                          type: 'password',
                                          label: 'Confirm password',
                                          value: b,
                                          onChange: function (e) {
                                              return E(e.target.value);
                                          }
                                      }),
                                      r.a.createElement('br', null),
                                      r.a.createElement(
                                          N.a,
                                          { fullWidth: !0, className: I.submit, type: 'submit' },
                                          'Update'
                                      )
                                  )
                              )),
                        r.a.createElement('div', null, t, j && r.a.createElement('p', null, j))
                    );
                },
                Te = Object(k.a)(function (e) {
                    return {
                        paper: {
                            margin: e.spacing(3),
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        },
                        avatar: { margin: e.spacing(1), backgroundColor: e.palette.primary.main }
                    };
                }),
                Le = function () {
                    var e,
                        t = Object(n.useState)(''),
                        o = Object(u.a)(t, 2),
                        c = o[0],
                        l = o[1],
                        d = Object(m.h)().token,
                        p = Te();
                    return (
                        Object(n.useEffect)(function () {
                            (function () {
                                var e = Object(s.a)(
                                    i.a.mark(function e() {
                                        var t;
                                        return i.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), z(d);
                                                    case 2:
                                                        (t = e.sent), l(t.data.error);
                                                    case 4:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })()();
                        }),
                        (e = c
                            ? r.a.createElement(m.a, { to: '/' })
                            : r.a.createElement(
                                  O.a,
                                  { container: !0, component: 'main', justify: 'center' },
                                  r.a.createElement(
                                      O.a,
                                      { item: !0, xs: 12, sm: 8, md: 4 },
                                      r.a.createElement(
                                          'div',
                                          { className: p.paper },
                                          r.a.createElement('img', {
                                              src: a(320),
                                              alt: 'avatar',
                                              width: '150',
                                              style: { padding: 30 }
                                          }),
                                          r.a.createElement(De, { token: d })
                                      )
                                  )
                              )),
                        r.a.createElement('div', null, e)
                    );
                },
                We = a(366),
                Re = a(367),
                Pe = a(133),
                Ue = a.n(Pe),
                _e = a(134),
                Fe = a.n(_e),
                Be = a(135),
                qe = a.n(Be),
                Ve = a(136),
                Ge = a.n(Ve),
                ze = Object(k.a)({ root: { width: 500, maxWidth: '90%', margin: '0 auto' } }),
                Me = function () {
                    var e = ze(),
                        t = Object(m.g)(),
                        a = Object(n.useContext)(h),
                        o = (a.user, a.dispatch),
                        c = r.a.useState(0),
                        l = Object(u.a)(c, 2),
                        i = l[0],
                        s = l[1];
                    return r.a.createElement(
                        We.a,
                        {
                            value: i,
                            onChange: function (e, t) {
                                s(t);
                            },
                            showLabels: !0,
                            className: e.root
                        },
                        r.a.createElement(Re.a, {
                            onClick: function () {
                                return t.push('/');
                            },
                            label: 'Home',
                            icon: r.a.createElement(Ue.a, null)
                        }),
                        r.a.createElement(Re.a, {
                            onClick: function () {
                                return t.push('/library');
                            },
                            label: 'Library',
                            icon: r.a.createElement(Fe.a, null)
                        }),
                        r.a.createElement(Re.a, {
                            onClick: function () {
                                return t.push('/account');
                            },
                            label: 'Account',
                            icon: r.a.createElement(qe.a, null)
                        }),
                        r.a.createElement(Re.a, {
                            label: 'Logout',
                            icon: r.a.createElement(Ge.a, null),
                            onClick: function () {
                                try {
                                    o({ type: 'LOGOUT', payload: {} }),
                                        localStorage.removeItem('token');
                                } catch (e) {
                                    console.log('Logout error', e);
                                }
                            }
                        })
                    );
                },
                Qe = function () {
                    var e = Object(n.useContext)(h).user;
                    Object(m.g)();
                    return r.a.createElement(
                        'div',
                        null,
                        e.loggedIn && r.a.createElement(Me, null),
                        r.a.createElement(
                            'footer',
                            {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    backgroundColor: '#5f27cd',
                                    color: '#fff',
                                    padding: '5px 30px'
                                }
                            },
                            r.a.createElement(
                                'div',
                                null,
                                r.a.createElement(
                                    S.a,
                                    {
                                        variant: 'h2',
                                        style: {
                                            fontFamily: "'Amatic SC', cursive",
                                            fontSize: '5em'
                                        }
                                    },
                                    'Dewey'
                                )
                            ),
                            r.a.createElement(
                                'div',
                                null,
                                r.a.createElement('img', {
                                    src: a(321),
                                    height: '50',
                                    width: '50',
                                    className: 'dewey',
                                    alt: 'writing dino'
                                }),
                                r.a.createElement(
                                    'div',
                                    { style: { display: 'inline-block' } },
                                    r.a.createElement(
                                        S.a,
                                        { variant: 'body2', display: 'block', gutterBottom: !0 },
                                        'The boring legal stuff...not even Dewey enjoys this...'
                                    ),
                                    r.a.createElement(
                                        S.a,
                                        {
                                            variant: 'caption',
                                            display: 'block',
                                            gutterBottom: !0,
                                            style: { color: 'rgba(255,255,255,0.7' }
                                        },
                                        'Icons made by ',
                                        r.a.createElement('em', null, 'Freepik'),
                                        ' from',
                                        ' ',
                                        r.a.createElement(
                                            'a',
                                            {
                                                style: { color: 'rgba(255,255,255,0.7' },
                                                href: 'https://www.flaticon.com'
                                            },
                                            'www.flaticon.com'
                                        ),
                                        '.'
                                    ),
                                    r.a.createElement(
                                        S.a,
                                        {
                                            variant: 'caption',
                                            display: 'block',
                                            gutterBottom: !0,
                                            style: { color: 'rgba(255,255,255,0.7' }
                                        },
                                        '\xa9 ',
                                        ''
                                            .concat(new Date().getFullYear(), ' - ')
                                            .concat(new Date().getFullYear() + 1),
                                        ' | Terrence Mahnken, Pete Wanca, Alec Down. All Rights Reserved.'
                                    )
                                )
                            )
                        )
                    );
                },
                He = function (e) {
                    var t = e.path,
                        a = e.component,
                        o = Object(n.useContext)(h),
                        c = o.user,
                        l = o.dispatch,
                        u = c.loggedIn;
                    return (
                        Object(n.useEffect)(
                            function () {
                                (function () {
                                    var e = Object(s.a)(
                                        i.a.mark(function e() {
                                            return i.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (e.prev = 0),
                                                                    (e.next = 3),
                                                                    v()({
                                                                        method: 'GET',
                                                                        url: '/api/auth/validate',
                                                                        headers: {
                                                                            Authorization: 'Bearer '.concat(
                                                                                localStorage.getItem(
                                                                                    'token'
                                                                                )
                                                                            )
                                                                        }
                                                                    })
                                                                );
                                                            case 3:
                                                                l({ type: 'VALIDATION_SUCCESS' }),
                                                                    x(localStorage.token),
                                                                    (e.next = 10);
                                                                break;
                                                            case 7:
                                                                (e.prev = 7),
                                                                    (e.t0 = e.catch(0)),
                                                                    l({
                                                                        type: 'VALIDATION_FAILURE',
                                                                        payload: {
                                                                            error: "Please sign in to visit the page '".concat(
                                                                                t,
                                                                                "'."
                                                                            )
                                                                        }
                                                                    });
                                                            case 10:
                                                            case 'end':
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null,
                                                [[0, 7]]
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })()();
                            },
                            [l, t]
                        ),
                        u
                            ? r.a.createElement(m.b, { exact: !0, path: t, component: a })
                            : r.a.createElement(m.a, { to: '/', component: L })
                    );
                },
                Je = function () {
                    Object(n.useContext)(h).user;
                    return r.a.createElement(
                        'div',
                        { className: 'App' },
                        r.a.createElement(
                            d.a,
                            null,
                            r.a.createElement(
                                'div',
                                { style: { padding: 10 } },
                                r.a.createElement(
                                    m.d,
                                    null,
                                    r.a.createElement(m.b, { exact: !0, path: '/', component: L }),
                                    r.a.createElement(m.b, {
                                        exact: !0,
                                        path: '/register',
                                        component: H
                                    }),
                                    r.a.createElement(He, {
                                        exact: !0,
                                        path: '/dashboard',
                                        component: fe
                                    }),
                                    r.a.createElement(He, {
                                        exact: !0,
                                        path: '/library',
                                        component: ke
                                    }),
                                    r.a.createElement(He, {
                                        exact: !0,
                                        path: '/account',
                                        component: ye
                                    }),
                                    r.a.createElement(m.b, {
                                        exact: !0,
                                        path: '/reset/:token',
                                        component: Le
                                    }),
                                    r.a.createElement(m.b, {
                                        exact: !0,
                                        path: '/forgotPassword',
                                        component: Ne
                                    }),
                                    r.a.createElement(m.b, { exact: !0, component: Oe })
                                )
                            ),
                            r.a.createElement(Qe, null)
                        )
                    );
                },
                Ye = Boolean(
                    'localhost' === window.location.hostname ||
                        '[::1]' === window.location.hostname ||
                        window.location.hostname.match(
                            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                        )
                );
            function $e(e, t) {
                navigator.serviceWorker
                    .register(e)
                    .then(function (e) {
                        e.onupdatefound = function () {
                            var a = e.installing;
                            null != a &&
                                (a.onstatechange = function () {
                                    'installed' === a.state &&
                                        (navigator.serviceWorker.controller
                                            ? (console.log(
                                                  'New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                                              ),
                                              t && t.onUpdate && t.onUpdate(e))
                                            : (console.log('Content is cached for offline use.'),
                                              t && t.onSuccess && t.onSuccess(e)));
                                });
                        };
                    })
                    .catch(function (e) {
                        console.error('Error during service worker registration:', e);
                    });
            }
            var Ke = a(137),
                Xe = a(368),
                Ze = Object(Ke.a)({
                    typography: {
                        useNextVariants: !0,
                        fontFamily: ['Raleway', 'sans-serif'].join(',')
                    },
                    palette: { primary: { main: '#576574' }, secondary: { main: '#5f27cd' } },
                    overrides: {
                        MuiButton: {
                            text: {
                                background: 'linear-gradient(to right, #5f27cd, #7f44f2)',
                                color: '#fff',
                                boxShadow:
                                    '-10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(95,39,205,0.3)',
                                padding: '10px 20px',
                                marginBottom: '10px',
                                '&:hover': { backgroundColor: '#341f97' }
                            }
                        }
                    }
                });
            c.a.render(
                r.a.createElement(
                    E,
                    null,
                    r.a.createElement(Xe.a, { theme: Ze }, r.a.createElement(Je, null))
                ),
                document.getElementById('root')
            ),
                (function (e) {
                    if ('serviceWorker' in navigator) {
                        if (new URL('', window.location.href).origin !== window.location.origin)
                            return;
                        window.addEventListener('load', function () {
                            var t = ''.concat('', '/service-worker.js');
                            Ye
                                ? (!(function (e, t) {
                                      fetch(e, { headers: { 'Service-Worker': 'script' } })
                                          .then(function (a) {
                                              var n = a.headers.get('content-type');
                                              404 === a.status ||
                                              (null != n && -1 === n.indexOf('javascript'))
                                                  ? navigator.serviceWorker.ready.then(function (
                                                        e
                                                    ) {
                                                        e.unregister().then(function () {
                                                            window.location.reload();
                                                        });
                                                    })
                                                  : $e(e, t);
                                          })
                                          .catch(function () {
                                              console.log(
                                                  'No internet connection found. App is running in offline mode.'
                                              );
                                          });
                                  })(t, e),
                                  navigator.serviceWorker.ready.then(function () {
                                      console.log(
                                          'This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA'
                                      );
                                  }))
                                : $e(t, e);
                        });
                    }
                })();
        },
        98: function (e, t, a) {
            e.exports = a.p + 'static/media/avatar.d75a49bd.png';
        }
    },
    [[146, 1, 2]]
]);
//# sourceMappingURL=main.63f8f07c.chunk.js.map
