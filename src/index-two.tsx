import * as React from "react";
import { WidgetWrapper, TitleBar, ItemListCard, FilterPanel, FormField, Label, Select, Input, DatePicker } from "uxp/components";
import { registerWidget, registerLink, IContextProvider, } from './uxp';

import './styles.scss';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';



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


const SampleWidget: React.FunctionComponent<{}> = (props) => {

    let [selected, setSelected] = React.useState<string | null>("op-1");
    let [inputValue, setInputValue] = React.useState<string | null>("sample text");

    let [date, setDate] = React.useState<Date>(new Date())

    return <>

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

                <div className="digital-sm-bar">
                    <DatePicker
                        title="Date"
                        date={date}
                        onChange={(date) => setDate(date)}
                    />
                </div>

            </div>

        </TitleBar>

        <WidgetWrapper>

            <TitleBar
                icon='https://static.iviva.com/images/Adani_UXP/users.svg'
                title='TOTAL TECHNICIAN HOURS (YTD)' >
            </TitleBar>

            <div className="technician-section">

                <div className="technician_chart-section inline bgWhite" id="pie-chart">
                    <h4>Hours</h4>

                    <div className="technician_chart">

                        <BarChart
                            width={400}
                            height={300}
                            data={data}
                        >
                            <CartesianGrid vertical={false} stroke="#dddddd" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar barSize={15} dataKey="2018" fill="#d5be8a" />
                            <Bar barSize={15} dataKey="2019" fill="#cc6f8b" />
                        </BarChart>

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

const Widget_1: React.FunctionComponent<{}> = (props) => {
    return(<WidgetWrapper>
        <TitleBar title="Widget 01">
            <FilterPanel ></FilterPanel>
        </TitleBar>

        <div>
            content
        </div>
    </WidgetWrapper>)
}

registerWidget({
    "id": "widget_01",
    "name": "widget 01",
    "widget": Widget_1,
    "configs": {
       
    }
});

registerWidget({
    "id": "dealwidget",
    "name": "Hubspot Deals Widget",
    "widget": SampleWidget,
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
