Встановлюємо залежності для python
```
pip install -r requirements.txt
```

Запуск серверу
```bash
python3 server.py
```

Документація API
``
http://127.0.0.1:8080/docs
``

Приклад запиту
```
curl -X 'POST' \
  'http://127.0.0.1:8080/ner/predict/' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "description": "Продам Таврію Нова у відмінному стані. Зберігалась у сухому гаражі з 2012 року, була на концервації. Жодної ржавчинки немає. Все працює відмінно."
}'
```