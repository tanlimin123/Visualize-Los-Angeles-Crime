
# coding: utf-8

# In[9]:



import numpy as np
import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile
import datetime as dt

import json


# In[4]:


# import the data
crime = pd.read_csv("Crime_Data_2010_2017.csv")
crime["Area Name"].value_counts()

crime.info()


# In[ ]:





# In[36]:


#line chart(' Data Description" page') to see the status of these crime
a=crime[["Status Description",'Year Reported']]
print(a.head(10))
a.set_index("Year Reported")
b=a.groupby(['Status Description','Year Reported']).size()
b


# In[49]:


# this is for " Data Description" page piechart data(show the vicitim age ratio)
a=crime["Victim Age"].dropna().value_counts()
print(type(a))
a=a.values
b=pd.cut(a,4,labels=["Children", "Youth", "Adults","Seniors"])
c=b.value_counts()
c
# writer = ExcelWriter('PythonExpo.xlsx')
# c.to_frame().to_excel(writer,'Sheet3')
# writer.save()


# In[145]:


#data for the "Date description" page /map chart/ piechart(top 5 high crime rate area)

top5area=crime['Area Name'].value_counts().head(5).index

a=crime.loc[crime['Area Name'].isin(top5area)]
print(type(a))
a.groupby('Victim Sex').size()


# In[25]:


#for the map chart data to get the coordinate of the marker in map(Date description page)
all=crime[['Area Name','Location ']]


c=all["Area Name"].value_counts()
print(all.loc[all['Area Name'] == '77th Street'])#this is method to get the location of map .
print(c)


# In[5]:


#date for piechart in map(show the victime sex of vicitim in this area)
top5area=crime['Area Name'].value_counts().head(5).index

a=crime.loc[crime['Area Name'].isin(top5area)]
print(type(a))
b=a["Date Reported"].value_counts().sort_index().to_frame()


a=a["Victim Age"].dropna().value_counts()
b=pd.cut(a,4,labels=["Children", "Youth", "Adults","Seniors"])
c=b.value_counts()

# b["Date Reported"].values.tolist()
# print(b['Date Reported'].tolist())


# In[121]:


#data for the map marker that showt the how many crime was reported and occurred(linechart)
top5area=crime['Area Name'].value_counts().head(5).index

a=crime.loc[crime['Area Name'].isin(top5area)]
print(type(a))
b=a["Date Occurred"].value_counts().sort_index().to_frame()

b["Date Occurred"].values.tolist()
print(b['Date Occurred'].tolist())

# b[]


# In[ ]:





# In[94]:


#this  the chartdate of "Crime html"（crimechart2）

top5weapon = crime["Weapon Description"].value_counts().reset_index(name="Count")
top5weapon.columns=['name','value']
top5weapon.to_dict('records')


# In[107]:


#this is the data for crime html (crimechart3)

carstolen=crime[crime['Crime Code Description']=='VEHICLE - STOLEN']


a=carstolen["Weapon Description"].value_counts().reset_index(name="Count")

a


# In[27]:


#date for crime html (crimechart1)

top6premises = crime["Premise Description"].value_counts().head(6).index
top6crimes = crimenoon["Crime Code Description"].value_counts().head(6).index
crimenoon = crime.loc[crime["Premise Description"].isin(top6premises)]
crimenoon2 = crimenoon.loc[crimenoon["Crime Code Description"].isin(top6crimes)]
ccpremnoon2 = crimenoon2.groupby(["Crime Code Description", "Premise Description"]).size().reset_index(name="Count")
ccpremnoon2['Crime Code Description'].unique()
# ccpremnoon2["Premise Description"].unique()
# print(ccpremnoon["Premise Description"].unique())
# print(ccpremnoon["Crime Code Description"].unique())


# In[78]:


#date for crime html (crimechart1)
x = {
    "BATTERY - SIMPLE ASSAULT": 0,
    "BURGLARY": 1,
    "BURGLARY FROM VEHICLE": 2,
    "INTIMATE PARTNER - SIMPLE ASSAULT": 3,
    "THEFT OF IDENTITY": 4,
    "VEHICLE - STOLEN": 5,
    
}
y={"MULTI-UNIT DWELLING (APARTMENT, DUPLEX, ETC)": 0,
    "OTHER BUSINESS": 1,
    "STREET": 2,
    "PARKING LOT": 3,
    "SIDEWALK": 4,
    "SINGLE FAMILY DWELLING": 5,}


ccpremnoon2["x"] =ccpremnoon2["Crime Code Description"].map(x)
ccpremnoon2["y"] =ccpremnoon2["Premise Description"].map(y)
c=ccpremnoon2[['x','y','Count']]
a=c['x'].tolist()
print(a)
b=c['y'].tolist()
print(b)
number=c['Count'].tolist()

d=zip (a,b,number)
print(list(d))


# In[19]:


#format the datatime data 
try:
    date_reported = [dt.datetime.strptime(d, "%m/%d/%Y").date() for d in crime["Date Reported"]]
except:
    print("Already converted Date Reported")
    
try:
    date_occurred = [dt.datetime.strptime(d, "%m/%d/%Y").date() for d in crime["Date Occurred"]]
except:
    print("Already converted Date Occurred")
    
# Reassign the date reported and occurred columns
crime["Date Reported"] = np.array(date_reported)
crime["Date Occurred"] = np.array(date_occurred)


# In[10]:


#data for the“ Time html" extract some the data we want from datatime data
def makemil(time):
    ntime = ""
    if len(str(time)) == 1:
        ntime = "000" + str(time)
    if len(str(time)) == 2:
        ntime = "00" + str(time)
    if len(str(time)) == 3:
        ntime = "0" + str(time)
    if len(str(time)) == 4:
        ntime = str(time)
    return ntime

def returnhour(miltime):
    return miltime[:2]
# Formatting to 4 char string
crime["Time Occurred"] = crime["Time Occurred"].apply(makemil)
crime["Hour Occurred"] = crime["Time Occurred"].apply(returnhour)


# In[20]:


# Making lists of days, months, and years for reported from datetime objects
day_reported = [d.isoweekday() for d in crime["Date Reported"]]
mon_reported = [d.month for d in crime["Date Reported"]]
year_reported = [d.year for d in crime["Date Reported"]]
# Making new columns for each
crime["Day Reported"] = np.array(day_reported)
crime["Month Reported"] = np.array(mon_reported)
crime["Year Reported"] = np.array(year_reported)

# a=crime[['Hour Occurred','Victim Age','Area Name','Year Reported']].dropna()
# writer = pd.ExcelWriter('output.xlsx')
# a.to_excel(writer,'Sheet1')

# writer.save()


# In[119]:


#data for "Time Page" line chart to show relationship between crime reported and occurred
a=crime["Date Reported"].value_counts()
b=a.sort_index().reset_index()
print(b.info())
b.set_index(['index'],drop=True,inplace=True)

print(b)
print(b['Date Reported'].tolist())


# In[9]:


#line chart for "Time page" to show the trendency of crime by year

A=crime['Year Reported'].value_counts().sort_index().to_frame()
A.index

A['Year Reported'].values


# In[21]:


#bar chart to show crime by day(Time html)
crime["Day Reported"].value_counts().tolist()


# In[22]:


#bar chart to show crime by hour(Time html)
a=crime["Hour Occurred"].value_counts().sort_index().to_frame()
a.index
a['Total']=a['Hour Occurred'].sum()
a['Ratio']=a['Hour Occurred']/a['Total']
a['A']=100
b=a['Ratio']*1000

print(b.round(2).tolist())

print(a['A'].tolist())


# In[40]:



#data for ('victim page') stacked bar chart to show how crime type by gender
crime["Victim Gender"] = crime["Victim Sex"][crime["Victim Sex"] != "X"]
crime["Victim Gender"] = crime["Victim Gender"][crime["Victim Gender"] != "H"]
a=crime[["Crime Code Description", "Victim Gender"]]
a= a[pd.notnull(a["Victim Gender"])]

# Saving top 5 crimes
crimetop5 = a["Crime Code Description"].value_counts().head(5).index
# Choosing data that is included in the top 10 crimes (by selection)
a = a.loc[a["Crime Code Description"].isin(crimetop5)]
# Group by Crime Code Description and Victim Gender
cc_gender = a.groupby(["Crime Code Description", "Victim Gender"]).size().reset_index(name="Count")
cc_gender


# In[26]:


#data for the victim html ( crime by descent)

a=crime[["Crime Code Description", "Victim Descent"]]
a= a[pd.notnull(a["Victim Descent"])]

# Saving top 5 crimes
victimtop5 = a["Crime Code Description"].value_counts().head(5).index
# Choosing data that is included in the top 10 crimes (by selection)
a = a.loc[a["Crime Code Description"].isin(victimtop5)]
# Group by Crime Code Description and Victim Gender
cc_gender = a.groupby([ "Victim Descent"]).size().reset_index(name="Count")
cc_gender.sort_values(['Count'])


# In[45]:


#data for the victim html ( crime by descent)
a=crime[["Crime Code Description", "Premise Description"]]
a= a[pd.notnull(a["Premise Description"])]

# Saving top 5 crimes
victimtop5 = a["Crime Code Description"].value_counts().head(5).index
# Choosing data that is included in the top 10 crimes (by selection)
a = a.loc[a["Crime Code Description"].isin(victimtop5)]
# Group by Crime Code Description and Premise Description
Premis = a.groupby([ "Premise Description"]).size().reset_index(name="Count")
Premis.sort_values(['Count'],ascending=False)


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[38]:




