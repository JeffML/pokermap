// These statistics are © Apu Kapadia, 2005
// used with permission

const arry = [

  { pair: 'AA', wins: '49.10	 ', ties: '0.67	' },
  { pair: 'KK', wins: '42.70	 ', ties: '0.66	' },
  { pair: 'QQ', wins: '37.59	 ', ties: '0.77	' },
  { pair: 'JJ', wins: '33.22	 ', ties: '0.88	' },
  { pair: 'KAs', wins: '29.77	 ', ties: '2.60	' },
  { pair: 'TT', wins: '29.52	 ', ties: '0.99	' },
  { pair: 'QAs', wins: '27.91	 ', ties: '2.90	' },
  { pair: 'QKs', wins: '26.97	 ', ties: '2.71	' },
  { pair: 'KA', wins: '26.51	 ', ties: '2.70	' },
  { pair: 'JAs', wins: '26.38	 ', ties: '3.18	' },
  { pair: '99', wins: '26.30	 ', ties: '0.87	' },
  { pair: 'JKs', wins: '25.49	 ', ties: '2.96	' },
  { pair: 'TAs', wins: '25.12	 ', ties: '3.44	' },
  { pair: 'JQs', wins: '24.82	 ', ties: '2.96	' },
  { pair: 'QA', wins: '24.47	 ', ties: '3.01	' },
  { pair: 'TKs', wins: '24.29	 ', ties: '3.20	' },
  { pair: '88', wins: '23.70	 ', ties: '0.87	' },
  { pair: 'TQs', wins: '23.68	 ', ties: '3.18	' },
  { pair: 'QK', wins: '23.62	 ', ties: '2.80	' },
  { pair: 'TJs', wins: '23.40	 ', ties: '3.22	' },
  { pair: 'JA', wins: '22.78	 ', ties: '3.31	' },
  { pair: '9As', wins: '22.53	 ', ties: '3.53	' },
  { pair: 'JK', wins: '21.98	 ', ties: '3.07	' },
  { pair: '9Ks', wins: '21.73	 ', ties: '3.20	' },
  { pair: '8As', wins: '21.53	 ', ties: '3.78	' },
  { pair: '77', wins: '21.52	 ', ties: '0.87	' },
  { pair: 'JQ', wins: '21.41	 ', ties: '3.08	' },
  { pair: 'TA', wins: '21.38	 ', ties: '3.59	' },
  { pair: '9Qs', wins: '21.17	 ', ties: '3.14	' },
  { pair: '9Ts', wins: '20.98	 ', ties: '3.21	' },
  { pair: '9Js', wins: '20.95	 ', ties: '3.15	' },
  { pair: 'TK', wins: '20.65	 ', ties: '3.32	' },
  { pair: '7As', wins: '20.65	 ', ties: '3.95	' },
  { pair: '5As', wins: '20.39	 ', ties: '4.20	' },
  { pair: 'TQ', wins: '20.13	 ', ties: '3.30	' },
  { pair: 'TJ', wins: '19.97	 ', ties: '3.33	' },
  { pair: '4As', wins: '19.92	 ', ties: '4.10	' },
  { pair: '8Ks', wins: '19.80	 ', ties: '3.36	' },
  { pair: '6As', wins: '19.59	 ', ties: '3.81	' },
  { pair: '66', wins: '19.56	 ', ties: '0.75	' },
  { pair: '3As', wins: '19.56	 ', ties: '3.95	' },
  { pair: '8Qs', wins: '19.29	 ', ties: '3.24	' },
  { pair: '2As', wins: '19.24	 ', ties: '3.82	' },
  { pair: '8Ts', wins: '19.18	 ', ties: '3.25	' },
  { pair: '8Js', wins: '19.10	 ', ties: '3.21	' },
  { pair: '7Ks', wins: '19.03	 ', ties: '3.56	' },
  { pair: '89s', wins: '18.99	 ', ties: '3.04	' },
  { pair: '9A', wins: '18.56	 ', ties: '3.69	' },
  { pair: '55', wins: '18.21	 ', ties: '0.89	' },
  { pair: '6Ks', wins: '18.19	 ', ties: '3.51	' },
  { pair: '9K', wins: '17.86	 ', ties: '3.33	' },
  { pair: '5Ks', wins: '17.80	 ', ties: '3.75	' },
  { pair: '78s', wins: '17.73	 ', ties: '3.00	' },
  { pair: '7Qs', wins: '17.58	 ', ties: '3.36	' },
  { pair: '79s', wins: '17.57	 ', ties: '3.07	' },
  { pair: '7Ts', wins: '17.49	 ', ties: '3.28	' },
  { pair: '8A', wins: '17.47	 ', ties: '3.95	' },
  { pair: '9T', wins: '17.41	 ', ties: '3.34	' },
  { pair: '9Q', wins: '17.40	 ', ties: '3.27	' },
  { pair: '7Js', wins: '17.39	 ', ties: '3.27	' },
  { pair: '4Ks', wins: '17.38	 ', ties: '3.62	' },
  { pair: '9J', wins: '17.28	 ', ties: '3.28	' },
  { pair: '3Ks', wins: '17.03	 ', ties: '3.47	' },
  { pair: '44', wins: '17.01	 ', ties: '0.78	' },
  { pair: '6Qs', wins: '16.82	 ', ties: '3.35	' },
  { pair: '2Ks', wins: '16.72	 ', ties: '3.33	' },
  { pair: '7A', wins: '16.48	 ', ties: '4.14	' },
  { pair: '5Qs', wins: '16.46	 ', ties: '3.55	' },
  { pair: '68s', wins: '16.19	 ', ties: '2.89	' },
  { pair: '67s', wins: '16.18	 ', ties: '2.88	' },
  { pair: '5A', wins: '16.16	 ', ties: '4.39	' },
  { pair: '4Qs', wins: '16.08	 ', ties: '3.42	' },
  { pair: '33', wins: '16.06	 ', ties: '0.68	' },
  { pair: '69s', wins: '15.92	 ', ties: '2.94	' },
  { pair: '6Ts', wins: '15.79	 ', ties: '3.17	' },
  { pair: '8K', wins: '15.76	 ', ties: '3.51	' },
  { pair: '3Qs', wins: '15.75	 ', ties: '3.27	' },
  { pair: '6Js', wins: '15.72	 ', ties: '3.22	' },
  { pair: '4A', wins: '15.65	 ', ties: '4.28	' },
  { pair: '56s', wins: '15.57	 ', ties: '2.74	' },
  { pair: '57s', wins: '15.54	 ', ties: '2.94	' },
  { pair: '2Qs', wins: '15.46	 ', ties: '3.13	' },
  { pair: '8T', wins: '15.44	 ', ties: '3.39	' },
  { pair: '5Js', wins: '15.41	 ', ties: '3.47	' },
  { pair: '45s', wins: '15.40	 ', ties: '2.79	' },
  { pair: '22', wins: '15.39	 ', ties: '0.59	' },
  { pair: '8Q', wins: '15.33	 ', ties: '3.37	' },
  { pair: '89', wins: '15.32	 ', ties: '3.16	' },
  { pair: '6A', wins: '15.32	 ', ties: '3.98	' },
  { pair: '8J', wins: '15.26	 ', ties: '3.35	' },
  { pair: '3A', wins: '15.23	 ', ties: '4.12	' },
  { pair: '58s', wins: '15.07	 ', ties: '3.01	' },
  { pair: '4Js', wins: '15.05	 ', ties: '3.33	' },
  { pair: '7K', wins: '14.89	 ', ties: '3.72	' },
  { pair: '2A', wins: '14.87	 ', ties: '3.98	' },
  { pair: '3Js', wins: '14.75	 ', ties: '3.16	' },
  { pair: '59s', wins: '14.66	 ', ties: '3.10	' },
  { pair: '5Ts', wins: '14.57	 ', ties: '3.38	' },
  { pair: '46s', wins: '14.47	 ', ties: '2.57	' },
  { pair: '2Js', wins: '14.46	 ', ties: '3.02	' },
  { pair: '35s', wins: '14.37	 ', ties: '2.61	' },
  { pair: '47s', wins: '14.29	 ', ties: '2.77	' },
  { pair: '4Ts', wins: '14.24	 ', ties: '3.30	' },
  { pair: '78', wins: '13.99	 ', ties: '3.12	' },
  { pair: '6K', wins: '13.96	 ', ties: '3.67	' },
  { pair: '3Ts', wins: '13.94	 ', ties: '3.13	' },
  { pair: '34s', wins: '13.87	 ', ties: '2.42	' },
  { pair: '79', wins: '13.76	 ', ties: '3.20	' },
  { pair: '48s', wins: '13.76	 ', ties: '2.86	' },
  { pair: '2Ts', wins: '13.67	 ', ties: '2.98	' },
  { pair: '7T', wins: '13.60	 ', ties: '3.43	' },
  { pair: '5K', wins: '13.52	 ', ties: '3.92	' },
  { pair: '7Q', wins: '13.46	 ', ties: '3.52	' },
  { pair: '49s', wins: '13.42	 ', ties: '2.99	' },
  { pair: '7J', wins: '13.39	 ', ties: '3.43	' },
  { pair: '36s', wins: '13.25	 ', ties: '2.39	' },
  { pair: '25s', wins: '13.19	 ', ties: '2.44	' },
  { pair: '39s', wins: '13.15	 ', ties: '2.88	' },
  { pair: '4K', wins: '13.05	 ', ties: '3.79	' },
  { pair: '37s', wins: '13.03	 ', ties: '2.60	' },
  { pair: '29s', wins: '12.90	 ', ties: '2.73	' },
  { pair: '24s', wins: '12.87	 ', ties: '2.25	' },
  { pair: '3K', wins: '12.66	 ', ties: '3.62	' },
  { pair: '6Q', wins: '12.64	 ', ties: '3.50	' },
  { pair: '38s', wins: '12.57	 ', ties: '2.73	' },
  { pair: '23s', wins: '12.47	 ', ties: '2.06	' },
  { pair: '28s', wins: '12.36	 ', ties: '2.63	' },
  { pair: '67', wins: '12.34	 ', ties: '2.98	' },
  { pair: '2K', wins: '12.32	 ', ties: '3.48	' },
  { pair: '68', wins: '12.30	 ', ties: '3.00	' },
  { pair: '5Q', wins: '12.23	 ', ties: '3.73	' },
  { pair: '26s', wins: '12.08	 ', ties: '2.23	' },
  { pair: '69', wins: '11.96	 ', ties: '3.06	' },
  { pair: '27s', wins: '11.88	 ', ties: '2.49	' },
  { pair: '4Q', wins: '11.79	 ', ties: '3.58	' },
  { pair: '6T', wins: '11.75	 ', ties: '3.32	' },
  { pair: '56', wins: '11.70	 ', ties: '2.84	' },
  { pair: '57', wins: '11.65	 ', ties: '3.06	' },
  { pair: '6J', wins: '11.56	 ', ties: '3.37	' },
  { pair: '45', wins: '11.53	 ', ties: '2.90	' },
  { pair: '3Q', wins: '11.41	 ', ties: '3.42	' },
  { pair: '5J', wins: '11.22	 ', ties: '3.64	' },
  { pair: '58', wins: '11.09	 ', ties: '3.14	' },
  { pair: '2Q', wins: '11.09	 ', ties: '3.26	' },
  { pair: '4J', wins: '10.81	 ', ties: '3.49	' },
  { pair: '59', wins: '10.59	 ', ties: '3.25	' },
  { pair: '46', wins: '10.50	 ', ties: '2.67	' },
  { pair: '3J', wins: '10.45	 ', ties: '3.31	' },
  { pair: '5T', wins: '10.41	 ', ties: '3.56	' },
  { pair: '35', wins: '10.39	 ', ties: '2.72	' },
  { pair: '47', wins: '10.26	 ', ties: '2.89	' },
  { pair: '2J', wins: '10.13	 ', ties: '3.16	' },
  { pair: '4T', wins: '10.03	 ', ties: '3.47	' },
  { pair: '34', wins: '9.87	 ', ties: '2.51	' },
  { pair: '3T', wins: '9.69	 ', ties: '3.28	' },
  { pair: '48', wins: '9.66	 ', ties: '2.99	' },
  { pair: '2T', wins: '9.39	 ', ties: '3.13	' },
  { pair: '49', wins: '9.22	 ', ties: '3.14	' },
  { pair: '36', wins: '9.18	 ', ties: '2.49	' },
  { pair: '25', wins: '9.11	 ', ties: '2.55	' },
  { pair: '39', wins: '8.92	 ', ties: '3.02	' },
  { pair: '37', wins: '8.89	 ', ties: '2.72	' },
  { pair: '24', wins: '8.79	 ', ties: '2.34	' },
  { pair: '29', wins: '8.63	 ', ties: '2.85	' },
  { pair: '38', wins: '8.37	 ', ties: '2.86	' },
  { pair: '23', wins: '8.34	 ', ties: '2.13	' },
  { pair: '28', wins: '8.11	 ', ties: '2.75	' },
  { pair: '26', wins: '7.90	 ', ties: '2.32	' },
  { pair: '27', wins: '7.66	 ', ties: '2.61	' },
]

export default arry;