import pandas as pd

transaction_csv_FILEPATH = "../data/transactions.csv" # CHANGE this filepath appropriately

trans = pd.read_csv(transaction_csv_FILEPATH, parse_dates=["Date of Sale"]) #CHANGE file path as needed
startDate = trans["Date of Sale"].max() - pd.DateOffset(months=6)
trans6mths = trans[trans["Date of Sale"] > startDate]

trans6mths.groupby("District")[["Price psft"]].count().to_csv("./stats/count_by_district.csv")
trans6mths.groupby("District")[["Price psft"]].max().to_csv("./stats/max_by_district.csv")
trans6mths.groupby("District")[["Price psft"]].mean().to_csv("./stats/avg_by_district.csv")
trans6mths.groupby("Type")[["Price psft"]].max().to_csv("./stats/max_by_type.csv")
trans6mths.groupby("Type")[["Price psft"]].mean().to_csv("./stats/avg_by_type.csv")
trans6mths.groupby("Type")[["Price psm"]].count().to_csv("./stats/count_by_type.csv")