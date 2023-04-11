import pandas as pd
import json
import tensorflow as tf
import numpy as np
from dateutil.relativedelta import *

transaction_csv_FILEPATH = "../data/transactions_w_districts.csv" # CHANGE this filepath appropriately
model_folder_name = "mlp_model" # CHANGE this filepath appropriately

trans = pd.read_csv(transaction_csv_FILEPATH, parse_dates=["Date of Sale"])
mean_df = trans.groupby([trans["Date of Sale"].dt.year, trans["Date of Sale"].dt.month]).mean()
mean_df["Date"] = list(mean_df.index)
dates = []
for d in mean_df["Date"]:
    if len(str(d[1]))<2:
        day = "0" + str(d[1])
    else:
        day = str(d[1])
    temp = str(d[0]) + "-" + day
    dates.append(temp)
mean_df["Date"] = pd.to_datetime(dates)
mean_df.reset_index(drop=True, inplace=True)

model = tf.keras.models.load_model(model_folder_name)
X_final = np.array(mean_df["Price psft"][-24:]).reshape(1,24)
pred = model.predict(X_final)
last_date = list(mean_df["Date"])[-1]
pred_date = last_date + relativedelta(months=1)

pred_year = pred_date.year
pred_month = pred_date.month
index_pred = []
for i in range(12):
    month_str = str(pred_month)
    if len(month_str) < 2:
        month_str = "0" + month_str
    year_month = str(pred_year) + "-" + month_str
    index_pred.append(year_month)
    
    pred_month += 1
    if pred_month > 12:
        pred_month = 1
        pred_year += 1
fc = pred[0]

pred_json = {"x":index_pred, "y":list(fc.astype(np.float64)), "type":"scatter",
             "marker": {
                "color": "rgb(14, 37, 207)"
            },
            "line": {
                "color": "rgb(14, 37, 207)"
            }
        }
with open("price_pred.json", "w") as f:
    f.write(json.dumps(pred_json, indent=4))