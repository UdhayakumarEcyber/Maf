import * as React from "react";
import { registerWidget, registerLink, IContextProvider, } from './uxp';
import { TitleBar, useToast, IToast, FilterPanel, Wizard, IWizardStep, Label, DataGrid, ItemCard, WidgetWrapper, DataList, Checkbox, Input, ToggleFilter, Modal, FormField, DatePicker, ItemListCard } from "uxp/components";
import './styles.scss';


function useFields(defaultValues: any) {
    let [obj, setObj] = React.useState(defaultValues);
    let setter: { [key: string]: (obj: any) => void } = {};
    let getter: { [key: string]: any } = {};
    let fieldNames = Object.keys(defaultValues);
    for (let i in fieldNames) {
        let fn = fieldNames[i];
        let setField = (v: any) => {
            let t: any = {};
            t[fn] = v;
            let newObj = Object.assign({}, obj, t);
            setObj(newObj);
            console.log('Assigning', obj, t, newObj);
        };
        setter[fn] = setField;
        getter[fn] = (obj as any)[fn] || '';
    }
    return [getter, setter, obj, setObj];
}
interface IDealWidget {
    uxpContext?: IContextProvider
}

interface IState { }

/**
add sidebar links as well
 */

// registerLink({
//     "id":"my-link",
//     "label":"Click Me",
//    component:(props)=>{
//        let [getter,setter,obj,setObj] = useFields({name:'',email:'',message:''});
//        let toast = useToast();
//        console.log('getter',getter);
//        let [show,setShow] = React.useState(true);
//        let [date,setDate] = React.useState(new Date());
//        console.log(setter,'SSS');
//        let steps:IWizardStep[] = [];
//        steps.push({id:'first',title:'First Step',render:(props)=>{
//                 return <FormField>
//                    <Label>Name</Label>
//                    <Input indicatorColor={'orange'} type={'text'} value={getter.name} onChange={setter.name} placeholder={'Contact Name'} />
//                </FormField>;
//        }});
//        steps.push({id:'third',title:'Date Picker',render:(props)=>{
//             return <FormField>
//                 <Label>Picke</Label>
//                 <DatePicker date={date} onChange={setDate} title="my Date" />
//             </FormField>
//        }});
//        steps.push({id:'second',title:'Second Step',render:(props)=>{
//         return <>
//           <FormField inline>
//                    <Label>Email</Label>
//                    <Input type={'text'} value={getter.email} onChange={setter.email} placeholder={'Email'} />
//                </FormField>
//                <FormField inline>
//                    <Label>Message</Label>
//                    <Input type={'text'} value={getter.message} onChange={setter.message} placeholder={'Message'} />
//                </FormField>
//                </>;
// }});

//        return <Modal title={'Add a Contact'} onClose={()=>{props.onClose()}} onOpen={()=>{}} show={true}>
//            <div style={{width:600,marginLeft:'auto',marginRight:'auto',minHeight:500}}>

//            <Wizard steps={steps} completionTitle={'Done!!!!11oneone'} onComplete={()=>{
//                toast.success({content:'done'});
//                props.onClose();
//             }} />
//             </div>
//        </Modal>;
//    }
// });


const DealWidget: React.FunctionComponent<IDealWidget> = (props) => {
    let [deals, setDetails] = React.useState([null, null, null]);
    React.useEffect(() => {
        props.uxpContext.executeAction('CRM', 'GetDeals', { 'page': '' }).then(data => {
            setDetails(JSON.parse(data).deals);
        });
    }, []);
    return (
        <WidgetWrapper>

            <TitleBar
                icon='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/168_Hubspot_logo_logos-512.png'
                title='Hubspot Deals' >
                <FilterPanel>
                    <Checkbox checked={true} onChange={() => { }} />
                    <ToggleFilter options={[{ label: 'Apples go here', value: 'A' }, { 'label': 'B', value: 'B' }]}
                        onChange={() => { }} value={'B'} />
                </FilterPanel>
            </TitleBar>
            <DataGrid data={deals} columns={2} renderItem={(item) => <ItemCard item={item} nameField={'dealname'} titleField={'dealname'} subTitleField={'amount'} />} />
        </WidgetWrapper>
    );
};


const ContactWidget: React.FunctionComponent<IDealWidget> = (props) => {
    return <WidgetWrapper>
        <TitleBar
            icon='https://static.iviva.com/images/Adani_UXP/users.svg'
            title='TOTAL TECHNICIAN HOURS (YTD)' >
        </TitleBar>

        <DataList data={async (max, lastPageToken, args) => {
            let items = await props.uxpContext.executeAction('CRM', 'GetContacts', { 'page': lastPageToken });
            let data = JSON.parse('' + items);
            return { items: data.contacts, pageToken: data.page };
        }} pageSize={10} renderItem={(item) => <ItemCard item={item} nameField={'firstname'} titleField={'firstname'}
            subTitleField={'email'} />} />


        <ItemListCard title="System"
            item={{
                "hvac": {
                    "value": 250,
                    "percentage": 15
                },
                "lighting": {
                    "value": 250,
                    "percentage": 15
                },
                "elevators": {
                    "value": 250,
                    "percentage": 15
                },
                "fire alarm": {
                    "value": 250,
                    "percentage": 15
                }
            }}
            renderSubTitle={() => {
                return (<div className="sample-subtitle">Savings (AED)</div>)
            }}
            fields={["hvac", "lighting", "elevators", "fire alarm"]}
            renderField={(item, field) => {
                return (<div className="sample-item-field">
                    <div className="label">{field.toUpperCase()}</div>
                    <div className="value">
                        <div className="amount">{item[field].value}</div>
                        <div className="percentage">{item[field].percentage}%</div>
                    </div>
                </div>)
            }}
            backgroundColor="rgb(209 148 250)"
        />



    </WidgetWrapper>;
};

registerWidget({
    id: 'contactwidget',
    name: 'Hubspot Contact Widget',
    widget: ContactWidget
});
registerWidget({
    "id": "dealwidget",
    "name": "Hubspot Deals Widget",
    "widget": DealWidget,
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