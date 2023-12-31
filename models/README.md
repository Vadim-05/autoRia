# Тренування моделі 
https://spacy.io/usage/training

Створити конфіг 
```bash
python -m spacy init fill-config base_config.cfg config.cfg
```

Тренування моделі
```djangourlpath
python -m spacy train config.cfg --output ./output --paths.train ../datasets/train.spacy --paths.dev ../datasets/train.spacy
```

Лог тренування
```
E    #       LOSS TOK2VEC  LOSS NER  ENTS_F  ENTS_P  ENTS_R  SCORE 
---  ------  ------------  --------  ------  ------  ------  ------
  0       0          0.00     67.59    0.00    0.00    0.00    0.00
  3     200        370.85   2127.50   14.93   18.07   12.71    0.15
  7     400       2291.85   1007.93   70.00   75.49   65.25    0.70
 11     600        695.94    553.48   83.62   85.09   82.20    0.84
 16     800        230.16    167.92   97.87   98.29   97.46    0.98
 22    1000         15.42     26.66  100.00  100.00  100.00    1.00
 29    1200         13.36     12.80  100.00  100.00  100.00    1.00
 37    1400         40.06     17.54  100.00  100.00  100.00    1.00
 47    1600         21.38      5.81  100.00  100.00  100.00    1.00
 59    1800         41.52     18.78   98.31   98.31   98.31    0.98
 75    2000        116.62     37.15  100.00  100.00  100.00    1.00
 95    2200        104.50     29.09  100.00  100.00  100.00    1.00
120    2400         25.91      8.14  100.00  100.00  100.00    1.00
148    2600         11.97      3.96  100.00  100.00  100.00    1.00
```

Новий лог тренування
```
E    #       LOSS TOK2VEC  LOSS NER  ENTS_F  ENTS_P  ENTS_R  SCORE
---  ------  ------------  --------  ------  ------  ------  ------
  0       0          0.00     27.32    0.00    0.00    0.00    0.00
  1     200        781.23   2915.55   20.39   33.94   14.57    0.20
  2     400       2282.69   1074.96   26.58   31.05   23.23    0.27
  4     600       8570.66   1183.74   41.20   41.87   40.55    0.41
  5     800       4729.04    884.65   47.23   49.36   45.28    0.47
  7    1000       7998.18    916.20   63.35   64.11   62.60    0.63
  8    1200      12932.87    782.16   71.20   72.36   70.08    0.71
 10    1400       2288.18    314.93   79.22   78.91   79.53    0.79
 11    1600        466.39    275.17   85.26   86.29   84.25    0.85
 13    1800        743.64    227.11   86.39   86.56   86.22    0.86
 15    2000       6608.79    382.24   92.31   92.49   92.13    0.92
 16    2200        168.10    124.60   91.52   91.70   91.34    0.92
 18    2400        437.99    138.54   97.03   97.61   96.46    0.97
 20    2600       2320.31    140.42   97.47   96.53   98.43    0.97
 22    2800        987.35    169.13   97.64   97.64   97.64    0.98
 24    3000        243.12    104.10   97.84   97.65   98.03    0.98
 26    3200      60939.04    187.75   98.04   97.66   98.43    0.98
 30    3400        550.81    129.95   98.43   98.43   98.43    0.98
 34    3600        287.18     92.45   98.22   98.42   98.03    0.98
 40    3800        301.23    102.10   99.02   98.82   99.21    0.99
 46    4000        509.53     92.68   99.80   99.61  100.00    1.00
 51    4200         64.84     26.62   99.60  100.00   99.21    1.00
 57    4400        196.66     41.78   99.60  100.00   99.21    1.00
 62    4600        218.13     39.15   99.41   99.22   99.61    0.99
 68    4800        131.01     21.93   99.80   99.61  100.00    1.00
 74    5000        197.81     47.12   99.41   98.83  100.00    0.99
 79    5200        665.79     82.24   99.41   99.22   99.61    0.99
 85    5400       8235.14    134.06   99.80   99.61  100.00    1.00
 90    5600        169.47     36.83   99.80   99.61  100.00    1.00
 ```

 Лог ціна тренування
```
E    #       LOSS TOK2VEC  LOSS NER  ENTS_F  ENTS_P  ENTS_R  SCORE
---  ------  ------------  --------  ------  ------  ------  ------
  0       0          0.00     27.32    0.00    0.00    0.00    0.00
  1     200        781.23   2915.55   20.39   33.94   14.57    0.20
  4     600       8570.66   1183.74   41.20   41.87   40.55    0.41
  5     800       4729.04    884.65   47.23   49.36   45.28    0.47
  7    1000       7998.18    916.20   63.35   64.11   62.60    0.63
  8    1200      12932.87    782.16   71.20   72.36   70.08    0.71
 10    1400       2288.18    314.93   79.22   78.91   79.53    0.79
 11    1600        466.39    275.17   85.26   86.29   84.25    0.85
 13    1800        743.64    227.11   86.39   86.56   86.22    0.86
 15    2000       6608.79    382.24   92.31   92.49   92.13    0.92
 16    2200        168.10    124.60   91.52   91.70   91.34    0.92
 18    2400        437.99    138.54   97.03   97.61   96.46    0.97
 20    2600       2320.31    140.42   97.47   96.53   98.43    0.97
 22    2800        987.35    169.13   97.64   97.64   97.64    0.98
 24    3000        243.12    104.10   97.84   97.65   98.03    0.98
 26    3200      60939.04    187.75   98.04   97.66   98.43    0.98
 30    3400        550.81    129.95   98.43   98.43   98.43    0.98
 34    3600        287.18     92.45   98.22   98.42   98.03    0.98
 40    3800        301.23    102.10   99.02   98.82   99.21    0.99
 46    4000        509.53     92.68   99.80   99.61  100.00    1.00
 51    4200         64.84     26.62   99.60  100.00   99.21    1.00
 57    4400        196.66     41.78   99.60  100.00   99.21    1.00
 62    4600        218.13     39.15   99.41   99.22   99.61    0.99
 68    4800        131.01     21.93   99.80   99.61  100.00    1.00
 74    5000        197.81     47.12   99.41   98.83  100.00    0.99
 79    5200        665.79     82.24   99.41   99.22   99.61    0.99
 85    5400       8235.14    134.06   99.80   99.61  100.00    1.00
 90    5600        169.47     36.83   99.80   99.61  100.00    1.00
```