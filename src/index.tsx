import * as React from "react";
import { DataList, WidgetWrapper, TitleBar, ItemListCard, FilterPanel, FormField, Label, Select, Input, DatePicker, ProfileImage, Popover, TrendChartComponent } from "uxp/components";
import { registerWidget, registerLink, IContextProvider, } from './uxp';

import './styles.scss';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ComposedChart } from 'recharts';

 
const reliability_data = [
    {
        name: 'Jan',  HVAC: 5, LIGHTING: 6, ELEVATORS: 7, FIRE_ALARM: 8, amt: 35, 
    }, 

    {
        name: 'Feb', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    },
    {
        name: 'Mar', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    },
    {
        name: 'Apr', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    },
    {
        name: 'May', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    },
    {
        name: 'Jun', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    },
    {
        name: 'Jul', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    },
    {
        name: 'Aug', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    },
    {
        name: 'Sep', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    },
    {
        name: 'Oct', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    },
    {
        name: 'Nov', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    },
    {
        name: 'Dec', HVAC: 5, LIGHTING: 5, ELEVATORS: 5, FIRE_ALARM: 5, amt: 25,
    }
];

const data = [
    {
        name: 'HVAC', 2018: 250, 2019: 230, amt: 425,
    },
    {
        name: 'LIGHTING', 2018: 370, 2019: 350, amt: 540,
    },
    {
        name: 'ELEVATORS', 2018: 300, 2019: 200, amt: 500,
    },
    {
        name: 'FIRE ALARM', 2018: 451, 2019: 387, amt: 400,
    }
];
 

let TopBarDetails = [
    { name: "Performance & Reliability", image: "https://static.iviva.com/images/Adani_UXP/reg_visit2.svg" }
    // {name: "Maintenance Services", image: "https://static.iviva.com/images/Adani_UXP/reg_visit2.svg"},
    // {name: "Savings", image: "https://static.iviva.com/images/Adani_UXP/reg_visit2.svg"},
    // {name: "Bookings", image: "https://static.iviva.com/images/Adani_UXP/calendar_min_icon.png"},
    // {name: "Emergency", image: "https://static.iviva.com/images/Adani_UXP/emergency.svg"}
]


// datalist
const renderItem = (item: any, key: number) => {
    return (<div className="list-item">

        <div className="asset list-item-elmt">{item.asset}</div>
        <div className="gradient list-item-elmt">{item.gradient.value}<span className={item.gradient.status}></span></div>
        <div className="feedback list-item-elmt">{item.supply_feedback.value}<span className={item.supply_feedback.status}></span></div>
        <div className="pressure_value list-item-elmt">{item.pressure_value.value}<span className={item.pressure_value.status}></span></div>
        <div className="pressure_low list-item-elmt">{item.pressure_low.value}<span className={item.pressure_low.status}></span></div>

    </div>)
}

const DATA = [
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            // status : "https://static.iviva.com/images/Adani_UXP/down-arrow.svg"
            // down_status : "https://static.iviva.com/images/Adani_UXP/down-arrow.svg"
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-03",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-05",
        gradient: {
            value: 63,
            status: "down"
        },
        supply_feedback: {
            value: 65,
            status: "up"
        },
        pressure_value: {
            value: 65,
            status: "up"
        },
        pressure_low: {
            value: 65,
            status: "up"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 59,
            status: "down"
        },
        supply_feedback: {
            value: 45,
            status: "down"
        },
        pressure_value: {
            value: 45,
            status: "down"
        },
        pressure_low: {
            value: 45,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    },
    {
        asset: "AHU-L2-WCOURT-C3-02",
        gradient: {
            value: 60,
            status: "down"
        },
        supply_feedback: {
            value: 50,
            status: "down"
        },
        pressure_value: {
            value: 50,
            status: "down"
        },
        pressure_low: {
            value: 50,
            status: "down"
        }
    }
];


const getDataItems = (max: number, pageToken: string) => {
    let last = 0

    if (pageToken !== null) last = parseInt(pageToken);

    let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
        let data = DATA.filter((item: any, key: number) => (key > last && key <= last + max));
        let response = { items: data, pageToken: (last + data.length).toString() }
        resolve(response);
    })

    return p;
}


const Top_Navigation: React.FunctionComponent<{}> = (props) => {
    return (

        <div className="nav_bar_section">
            {
                TopBarDetails.map((user) => <div className="nav_bar">
                    <div className="nav_bar_icon"><ProfileImage image={user.image} /> </div>
                    <div className="nav_bar_name">{user.name}</div>
                </div>)
            }
        </div>
    )
}


const DigitalTwin: React.FunctionComponent<{}> = (props) => {

    let [selected, setSelected] = React.useState<string | null>("op-1");
    let [inputValue, setInputValue] = React.useState<string | null>("sample text");

    let [date, setDate] = React.useState<Date>(new Date())

    return (
        <WidgetWrapper>
            <TitleBar title="Digital Twin">
                <div className="digi_twin-rgt">
                    <div className="digital-selbox">
                        <FormField className="no-padding mb-only">
                            <Label>UNITED ARAB EMIRATES</Label>
                            <Select
                                selected={selected}
                                options={[
                                    { label: "Name", value: "op-1" },
                                    { label: "Date", value: "op-2" },
                                ]}
                                onChange={(value) => { setSelected(value) }}
                                placeholder=" -- select --"
                                isValid={selected ? selected?.length > 0 : null}
                            />
                        </FormField>
                    </div>

                    <div className="digital-selbox">
                        <FormField className="no-padding mb-only">
                            <Label>CITY CENTER DEIRA</Label>
                            <Select
                                selected={selected}
                                options={[
                                    { label: "Name", value: "op-1" },
                                    { label: "Date", value: "op-2" },
                                ]}
                                onChange={(value) => { setSelected(value) }}
                                placeholder=" -- select --"
                                isValid={selected ? selected?.length > 0 : null}
                            />
                        </FormField>
                    </div>

                    <div className="digital-selbox">
                        <FormField className="no-padding mb-only">
                            <Label>Ground Floor</Label>
                            <Select
                                selected={selected}
                                options={[
                                    { label: "Name", value: "op-1" },
                                    { label: "Date", value: "op-2" },
                                ]}
                                onChange={(value) => { setSelected(value) }}
                                placeholder=" -- select --"
                                isValid={selected ? selected?.length > 0 : null}
                            />
                        </FormField>
                    </div>

                    <div className="digital-sm-bar">
                        <DatePicker
                            title="Date"
                            date={date}
                            onChange={(date) => setDate(date)}
                        />
                    </div>

                    <div className="digital-sm-bar digital-filter-bar">
                        <FilterPanel
                            enableClear={inputValue?.length > 0 || selected != null}
                            onClear={() => { setInputValue(""); setSelected(null) }} >
                            <FormField className="no-padding mb-only">
                                <Label>Sort By</Label>
                                <Select
                                    selected={selected}
                                    options={[
                                        { label: "Name", value: "op-1" },
                                        { label: "Date", value: "op-2" },
                                    ]}
                                    onChange={(value) => { setSelected(value) }}
                                    placeholder=" -- select --"
                                    isValid={selected ? selected?.length > 0 : null}
                                />
                            </FormField>
                            <FormField className="no-padding mb-only">
                                <Label>Name</Label>
                                <Input
                                    type="text"
                                    value={inputValue}
                                    onChange={(value) => { setInputValue(value) }}
                                    isValid={inputValue ? inputValue.trim().length > 0 : null}
                                    hasIndicator
                                    placeholder="placeholder"
                                />
                            </FormField>
                        </FilterPanel>
                    </div>



                </div>

            </TitleBar>
        </WidgetWrapper>)
}


const Total_Technician: React.FunctionComponent<{}> = (props) => {

    return <>
        <WidgetWrapper>

            <TitleBar
                icon='https://static.iviva.com/images/Adani_UXP/users.svg'
                title='TOTAL TECHNICIAN HOURS (YTD)' >
            </TitleBar>

            <div className="technician-section">

                <div className="technician_chart-section inline bgWhite" id="totalTechnician">
                    <h4>Hours</h4>

                    <div className="technician_chart">
                        <ResponsiveContainer width="100%">
                            <BarChart data={data}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar barSize={15} dataKey="2018" fill="#d5be8a" />
                                <Bar barSize={15} dataKey="2019" fill="#cc6f8b" />
                            </BarChart>
                        </ResponsiveContainer>

                    </div>
                </div>

                <div className="list-card">
                    <ItemListCard title="System"
                        item={{
                            "hvac": {
                                "value": 250,
                                "percentage": 15,
                                "status": "up"
                            },
                            "lighting": {
                                "value": 250,
                                "percentage": 15,
                                "status": "up"
                            },
                            "elevators": {
                                "value": 250,
                                "percentage": 15,
                                "status": "down"
                            },
                            "fire alarm": {
                                "value": 250,
                                "percentage": 15,
                                "status": "up"
                            }
                        }}
                        renderSubTitle={() => {
                            return (<div className="sample-subtitle">Savings (HOURS)</div>)
                        }}
                        fields={["hvac", "lighting", "elevators", "fire alarm"]}
                        renderField={(item, field) => {
                            return (<div className="sample-item-field">
                                <div className="label">{field.toUpperCase()}</div>
                                <div className="value">
                                    <div className="amount">{item[field].value}</div>
                                    <div className="percentage">{item[field].percentage}% <div className={item[field].status}></div></div>
                                </div>
                            </div>)
                        }}
                        backgroundColor="rgb(234 213 200)"
                    />

                </div>

            </div>

        </WidgetWrapper>

    </>
}




const Filter_CLog: React.FunctionComponent<{}> = (props) => {
    let [date, setDate] = React.useState<Date>(new Date());
    let [selected, setSelected] = React.useState<string | null>("op-1");

    return <>
        <WidgetWrapper>

            <TitleBar icon='https://static.iviva.com/images/Maf_dashboard/clog-icon.png' title='Filter Clog' >

                <div className="clog-top-calen" style={{ textAlign: "right" }} >
                    <DatePicker
                        title="Date"
                        date={date}
                        onChange={(date) => setDate(date)}
                    />
                </div>
            </TitleBar>

            <div className="clog-section">

                <div className="clog-section-lft">
                    <div className="clog-ahu-filter">
                        <div className="ahu-filter-pict"></div>
                        <div className="ahu-filter-txt">
                            <h4>AHU FILTER</h4>
                            <p>CLOG STATUS PREDICTION</p>
                        </div>
                    </div>
                </div>

                <div className="clog-section-rgt inline bgWhite">
                    <div className="clog_data_list" style={{ width: "97%", height: 300 }} >

                        <div className="list-item list-item-header">

                            <div className="asset list-item-elmt">ASSET</div>
                            <div className="gradient list-item-elmt">GRADIENT</div>
                            <div className="feedback list-item-elmt">SUPPLY FAN VFD FEEDBACK</div>
                            <div className="pressure_value list-item-elmt">DIFFERENTIAL VALUE</div>
                            <div className="pressure_low list-item-elmt">

                                <FormField className="no-padding mb-only">

                                    <Select
                                        selected={selected}
                                        options={[
                                            { label: "DIFFERENTIAL PRESSURE LOW", value: "op-1" },
                                            { label: "DIFFERENTIAL PRESSURE LOW 1", value: "op-2" },
                                        ]}
                                        onChange={(value) => { setSelected(value) }}
                                        placeholder=" -- select --"
                                        isValid={selected ? selected?.length > 0 : null}
                                    />
                                </FormField>

                            </div>

                        </div>
                        <DataList
                            data={(max, last) => getDataItems(max, last)}
                            renderItem={renderItem}
                            pageSize={10}
                        />
                    </div>
                </div>


            </div>

        </WidgetWrapper>
    </>
}

 

interface ITrendChartProps {
}

 

const System_Reliability: React.FunctionComponent<ITrendChartProps> = (props) => {
    const customToolTip = (data: any) => {
        console.log(data)
        return <div className="my-custom-tooltip">
            {data.payload.map((item: any, key: number) => {
                return <div key={key} className="overall-tooltip">
                    
                        {/* {item.dataKey} : {item.value} */}

                         <div className="cust-tooltip-lft">{item.value}</div> <p>Vs</p>
                          {/* <p>Vs</p> <div className="cust-tooltip-rht">{item.datakey_year}</div> */}
                
                    </div>
            })}
        </div>
    }


    return <>
        <WidgetWrapper>

            <TitleBar
                icon='https://static.iviva.com/images/Maf_dashboard/reliability-icon.png'
                title='SYSTEM RELIABILITY PREDICTIONS'>
            </TitleBar>

            <div className="technician-section">

                <div className="technician_chart-section inline bgWhite" id="systemRelibility">


                    <div className="technician_chart"> 


                        <div style={{ width: "100%", height: "100%" }} >

                        <ResponsiveContainer>
                            <ComposedChart
                                data={reliability_data}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5, }}
                            >
                                <Tooltip content={customToolTip} />
                                <XAxis dataKey="name"/>
                                <YAxis />
                                <Tooltip animationEasing={'ease-in-out'} />
                                <Legend />
                                <Bar dataKey="HVAC" stackId="a" fill="#cc6f8b" />
                                <Bar dataKey="LIGHTING" stackId="a" fill="#d5be8a" />
                                <Bar dataKey="ELEVATORS" stackId="a" fill="#59aa6f" />
                                <Bar dataKey="FIRE_ALARM" stackId="a" fill="#48809d" />
                            </ComposedChart>
                        </ResponsiveContainer>

                        </div>


                    </div>
                </div>


            </div>

        </WidgetWrapper>

    </>
}




registerWidget({
    "id": "topNav",
    "name": "Top Navigation",
    "widget": Top_Navigation,
    "configs": {

    }
});

registerWidget({
    "id": "digitalTwin",
    "name": "Digital Twin",
    "widget": DigitalTwin,
    "configs": {

    }
});


registerWidget({
    "id": "totalTechnician",
    "name": "TOTAL TECHNICIAN HOURS",
    "widget": Total_Technician,
    "configs": {
        /*"props": [
            { "name": "link", "label": "Link", "type": "string", "attr": {"required": true} },
            { "name": "imageSrc", "type": "string",  "label": "Image Src", "attr": {"required": true }},
            { "name": "linkTitle", "type": "string", "label": "Title", "attr": {"required": true }},
            { "name": "background", "type": "string", "label": "Background Color", "attr": {"required": false }}
            
        ],*/
        "container": {
            "background": "white"
        }
    }
});


registerWidget({
    "id": "filterClog",
    "name": "Filter Clog",
    "widget": Filter_CLog,
    "configs": {
    }
});


registerWidget({
    "id": "SystemReliability",
    "name": "System Reliability",
    "widget": System_Reliability,
    "configs": {
    }
});
