declare module "uxp/components" {

    /**
     * The result of calling the useToast hook. This gives you methods to invoke notifications for success, errors, etc...
     * All notifications work the same way but have different styles.
     * @export
     */
    interface IToastResult {
        success: IToast,
        error: IToast,
        warning: IToast,
        info: IToast,
        remove: IRemove
    }

    /**
     * @export
     */
    interface IPopoverProps {
        /**
         * title of the popup bubble
         */
        title: string | HTMLElement,

        /**
         * the content to show within the bubble
         */
        content: string | HTMLElement,

        /**
         * Where the bubble should be positioned relative to the element
         */
        position?: IPosition
    }

    /**
     * @export
     * An individual item in a Select list.
     * The `label` is what is shown to the user.
     * The `value` is what is internally stored and available as the `value` prop.
     */
    interface IOption {
        label: string,
        value: string
    }

    /**
     * @export
     *
     */
    interface IToggleOption {
        /**
         * The text shown to the user for this option
         */
        label: string,

        /**
         * The actual value stored when this option is selected
         */
        value: string
    }

    /**
     * @export
     * An individual pie chart slice
     */
    interface IDataItem { name: string, value: number, color?: string }

    /**
     * @export
     */
    interface IWidgetWrapperProps {
        /**
         * Any extra css class names to add to the widget wrapper
         */
        className?: string
    }

    /**
     * Represents an individual marker
     * @example
     * {latitude:0,longitude:23.2,data:{'name':'FooBar'}}
     *
     * @export
     */
    interface IMarker {
        latitude: number,
        longitude: number,
        data?: any
    }

    /**
     * @export
     * Options that can be passed to a date picker field
     */
    interface IDatePickerOptions {
        /**
         * The minimum selectable date. Either a Date object an an ISO8601 date string
         */
        minDate?: string | Date,

        /**
         * The maximum selectable date. Either a Date object an an ISO8601 date string
         */
        maxDate?: string | Date,

        /**
         * If set to `true`, you cannot select a weekend date
         */
        disableWeekEnds?: boolean,

        /**
         * An array of specific dates that the user cannot select
         */
        disableDates?: Array<Date | String>
    }

    /**
     * @export
     *
     */
    interface IDatePickerProps {
        /**
         * The title
         */
        title: string,

        /**
         * The currently selected date. Either a Date object or an ISO8601 string representation of a date
         */
        date: string | Date,

        /**
         * Callback that gets executed whenever a date is selected/changed in the date picker
         */
        onChange: (date: Date) => void,

        /**
         * Called when the calendar popup is closed
         */
        closeOnSelect?: boolean,

        /**
         * Additional options to control behaviour
         */
        options?: IDatePickerOptions,

        /**
         * Set to true to prevent a user from typing in a date
         */
        disableInput?: boolean,

    }

    /**
     * This function is invoked to display a toast
     * @param title - the title to show in the notification popup
     * @param content - the content to show in the notification popup
     * @param showCloseBtn - set to true to show a close button on the notification popup
     * @param autoClose - if set to true, the notification popup will automatically dismiss itself after a preset duration
     * @param closeAfter - how many seconds to wait before closing - only applicable if autoClose is set to true
     * @param onClose - callback that is invoked after the toast is closed
     *
     * @export
     *
     */
    type IToast = (content: {
        title?: string | HTMLElement,
        content: string | HTMLElement,
        showCloseBtn?: boolean,
        autoClose?: boolean,
        onClose?: any,
        closeAfter?: number,
    }) => void;

    /**
     * The react hook for creating toasts
     * @export
     */
    type ToastHook = () => IToastResult;

    /**
     * @export
     */
    type IRemove = (id: string) => void;

    /**
     * A simple callback function
     * @export
     */
    type ICallback = () => void;

    /**
     * @export
     */
    type IDataFunction = (max: number, lastPageToken: string, args?: any) => Promise<{ items: Array<any>, pageToken: string }>;

    /**
     * Um - animations. We need to work on this.
     * @export
     */
    type IAnimation = 'm-slide-ftr' | 'm-slide-ftl' | 'm-slide-fbr' | 'm-slide-fbl' | 'm-zoom-fc';

    /**
     * Determines the behaviour of the input field
     * @export
     */
    type IInputType = "text" | "password" | "number" | "email";

    /**
     * @export
     */
    type ISize = "small" | "large";

    /**
     * @export
     * Determines how a checkbox field looks
     */
    type ICheckboxType = "default" | "bordered" | "change-icon" | "switch-line" | "switch-box";

    interface IModalProps {
        /**
         * Set this to true to make the modal visible
         */
        show: boolean,
        /**
         * Called whenever the modal is opened
         */
        onOpen: () => void,

        /**
         * Called when the modal gets closed
         */
        onClose: () => void,

        /**
         * The title set in the titlebar of the modal
         * If the `headerContent` attribute is set, then this value will not be used.
         */
        title?: string,

        /**
         * any custom component to use to render the dialog close button.
         * If a value is not provided and `showCloseButton` is set to true, the default close button UI will be rendered
         */
        closeButton?: JSX.Element,

        /**
         * Any extra css styles to apply
         */
        styles?: any,

        /**
         * Any extra css classes to apply
         */
        class?: string,

        /**
         * Any custom content to include in the modal header.
         * If this is set, then the `title` property will not be used.
         */
        headerContent?: JSX.Element

        /**
         * Set to true to allow the dialog to be closed by clicking outside of it
         */
        backgroundDismiss?: boolean,

        /**
         * Set this to 'true' to show the close button in the dialog
         */
        showCloseButton?: boolean,

        /**
         * Animation to use when opening/closing a modal
         */
        animation?: IAnimation
    }
    /**
     * Display a modal dialog. The dialog will be placed in front of a invisible sheet above the main UI.
     * @example
     * ```
     *  <button className="btn showcase" onClick={() => setShowModal(true)}>Click to Show Modal</button>
     *                           <Modal
     *                               show={showModal}
     *                               onOpen={() => { }}
     *                               onClose={() => setShowModal(false)}
     *                           >
     *                               This is a sample modal
     *                           </Modal>
     * ```
     * @export
     *
     */
    export const Modal: React.FunctionComponent<IModalProps>;

    interface IFormFieldProps {
        /**Set this to true to have multiple fields in a single horizontal line */
        inline?: boolean,
        /**
         * Any extra css classes to attach to the field
         */
        className?: string,

        /**
         * A background color to set for the field
         */
        backgroundColor?: string
    }
    /**
     *
     * This is a generic field used to layout forms. Typically used in conjunction with `<Label>` to show a field with a label
     * @export
     * @example
     * ```
     * <FormField inline>
     *       <Label>Button (active)</Label>
     *       <Button
     *           title="Sample Button"
     *           onClick={() => alert("clicked")}
     *           icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
     *           active
     *       />
     *   </FormField>
     * ```
     *
     * @example
     * TODO: More Examples
     */
    export const FormField: React.FunctionComponent<IFormFieldProps>;

    interface ILabelProps {
        labelFor?: string,
        className?: string,
        inline?: boolean
    }
    /**
     * A simple label. Usually used in conjunction with a FormField
     * @export
     *
     * @example
     * ```
     * <Label>Name</Label>
     * ```
     */
    export const Label: React.FunctionComponent<ILabelProps>;

    interface IInputProps {
        /**
         * Determines if the input field accepts a password, email address, number or just text. Default is 'text'
         */
        type?: IInputType,

        /**
         * The actual text
         */
        value: string,

        /**
         * This function is called whenever the text changes. The new text value is passed as a parameter
         */
        onChange: (value: string) => void,

        /**
         * Any additional class names to be included for the input field
         */
        className?: string,

        /**
         * Determines if an indicator should be shown at the end of the input.
         */
        hasIndicator?: boolean,

        /**
         * The color of the indicator icon (relevant only if hasIndicator is true)
         */
        indicatorColor?: string,
        isValid?: boolean,
        inputAttr?: { [key: string]: string | boolean }
        placeholder?: string,
        inline?: boolean
    }
    /**
     *
     * A standard text box
     * @export
     */
    export const Input: React.FunctionComponent<IInputProps>;

    interface IProfileImageProps {

        /**
         * The url for the image to be shown
         */
        image?: string,

        /**
         * Any name to be dispayed. This is used only if the image is empty.
         * 2 letters will be derived from the name (typically the first letter of the first 2 words in the name)
         * and a background color will be chosen. Background colors are random but consistent. So a given `name` string will always have the same background
         */
        name?: string,
        bgColor?: string,
        textColor?: string,
        className?: string,
        size?: ISize
    }
    /**
     * Display a profile picture. Alternatively you can specify a name and it will be shown in a colored background as initials
     *
     * @export
     */
    export const ProfileImage: React.FunctionComponent<IProfileImageProps>;
    /**
 * Show a simple loading animation indicator
 * @export
 */
    export const Loading: React.FunctionComponent<{}>;

    interface ITooltipProps {
        /**
         * The content to show inside the tooltip
         * @example
         *
         * ```
         * <Tooltip content="This is my tooltip" />
         * ```
         */
        content: string,

        /**
         * Where the tooltip should be placed relative to the element it is being displayed for
         * <Tooltip position="left" content="There are many like it but this one's mine" />
         */
        position?: IPosition
    }
    /**
     * This component wraps another component and shows a tooltip for the component it is wrapping, whenever the user moves the mouse over it.
     * @export
     */
    export const Tooltip: React.FunctionComponent<ITooltipProps>;
    /**
 * @export
 */
    interface IPopoverProps {
        /**
         * title of the popup bubble
         */
        title: string | HTMLElement,

        /**
         * the content to show within the bubble
         */
        content: string | HTMLElement,

        /**
         * Where the bubble should be positioned relative to the element
         */
        position?: IPosition
    }
    /**
     *
     * Show a popup bubble when clicking on an element.
     * Wrap the element you want to target in the popup bubble.
     *
     * @example
     * ```
     * <Popover title='Details' content={'Name:' + props.name}>
     *      <span>Click to see name</span>
     * </Popover>
     * ```
     * @export
     */
    export const Popover: React.FunctionComponent<IPopoverProps>;

    interface IFilterPanelProps {
        /**
         * Called whenever the panel is opened
         */
        onOpen?: ICallback,

        /**
         * Called whenever the panel gets dismissed
         */
        onClose?: ICallback,

        /**
         * Called whenever the clear button on the panel is pressed. This button is available only when `enableClear` is set to `true1`
         */
        onClear?: ICallback,
        fillContainer?: React.RefObject<HTMLElement>,

        /**
         * Any extra css classes to add to the filter panel
         */
        className?: string,

        /**
         * Enabled the clear button on the panel
         */
        enableClear?: boolean
    }
    /**
     * Displays a filter button which, when clicked, opens a popup panel.
     * Suitable for hiding filters for widgets or searches
     * @export
     *
     * @example
     * ```
     * <FilterPanel
     *                                enableClear={inputValue?.length > 0 || selected != null}
     *                                onClear={() => { setInputValue(""); setSelected(null) }} >
     *                                <FormField className="no-padding mb-only">
     *                                    <Label>Sort By</Label>
     *                                    <Select
     *                                        selected={selected}
     *                                        options={[
     *                                            { label: "Name", value: "op-1" },
     *                                            { label: "Date", value: "op-2" },
     *                                        ]}
     *                                        onChange={(value) => { setSelected(value) }}
     *                                        placeholder=" -- select --"
     *                                        isValid={selected ? selected?.length > 0 : null}
     *                                    />
     *                                </FormField>
     * </FilterPanel>
     * ```
     *
     */
    export const FilterPanel: React.FunctionComponent<IFilterPanelProps>;

    interface IWidgetTitleBarProps {
        /**
         * The title to show for the widget
         */
        title: string;

        /**
        * The Sub title to show for the widget
        */

        subTitleField?: string,

        /**
         * The url for an icon to be shown next to the title on the top left corner.
         */
        icon?: string;
        className?: string
    }
    /**
     * Use this to show a title area on widgets. You can set a title on the left side
     * and any arbitrary content on the right side - typically you would use a {@component FilterPanel} there.
     * The content that appears on the right side go as children of this component.
     * @export
     *
     * @example
     *
     * ```
     * <TitleBar title='My Test Widget'>
     *      <div>Active</div>
     * </TitleBar>
     * ```
     *
     */
    export const TitleBar: React.FunctionComponent<IWidgetTitleBarProps>;

    interface IFormFeedbackProps {
        validInput?: boolean,
        className?: string
    }
    /**
     * This is used to provide a success or error summary message for forms
     * @export
     * @example
     * ```
     * FormFeedback validInput>Form feedback ( valid )</FormFeedback>
     * ```
     *
     * @example
     * ```
     * <FormFeedback validInput={false}>Form feedback ( invalid )</FormFeedback>
     * ```
     *
     */
    export const FormFeedback: React.FunctionComponent<IFormFeedbackProps>;

    interface ISelectProps {
        options: IOption[],
        selected: string,
        onChange: (value: string) => void,
        placeholder?: string,
        className?: string,
        isValid?: boolean,
        inputAttr?: any
    }
    /**
     *
     * A select control to select one item from a list of multiple items
     * @export
     */
    export const Select: React.FunctionComponent<ISelectProps>;

    interface ICheckboxProps {
        /**
         * Called when the checkbox is checked or unchecked by clicking on it
         */
        onChange: (checked: boolean) => void,

        /**
         * Get or set the current state of the checkbox
         */
        checked: boolean,

        /**
         * Any additional text to show next to the checkbox
         */
        label?: string,

        /**
         * If set to 'false' the checkbox will show in an 'invalid' state - neither true nor false
         */
        isValid?: boolean,

        /**
         * Any additional html attributes to pass to the underlying input field
         */
        inputAttr?: { [key: string]: string | boolean },

        /**
         * Determines how the checkbox looks, visually
         */
        type?: ICheckboxType
    }
    /**
     *
     * @export
     *
     * A checkbox component. This can render a true/value value in multiple ways. Set the type property to determine how it looks visually.
     */
    export const Checkbox: React.FunctionComponent<ICheckboxProps>;

    interface IToggleFilterProps {
        /**
         * The list of possible options to choose from
         */
        options: IToggleOption[],

        /**
         * The current value (selected item)
         */
        value: string,

        /**
         * Called whenever an option is selected
         */
        onChange: (newValue: string) => void,

        /**
         * Any additional css classes to include
         */
        className?: string
    }
    /**
     * This component presents a group of options from which one can be selected.
     * Suitable to select a single item from a list where the list is very small. Most often used for filters.
     * @export
     */
    export const ToggleFilter: React.FunctionComponent<IToggleFilterProps>;

    interface IPieChartProps {
        /**
         * A list of items that the pie chart is comprised of
         */
        data: IDataItem[],

        /**
         * TODO
         */
        fillColor: string,

        /**
         * Set to `true` to show the chart legend
         */
        showLegend?: boolean
    }
    /**
     *
     * Display a pie chart visualization
     * @export
     */
    export const PieChartComponent: React.FunctionComponent<IPieChartProps>;

    interface IDataListProps {
        /**
         * List of items to render. This can either be an array of objects or a function that will generate the array of objects.
         * If you supply a function then pagination will be supported. The function expects 2 parameters - `max` and `last` and returns a promise that will resolve to the list of objects.
         * `max` specifies the maximum number of items to be returned.
         */
        data: Array<any> | IDataFunction,

        /**
         * A function that will be responsible for rendering each individual element of the list.
         * It is common to return  `ItemCard` component from here.
         *
         * @example
         *
         * ```
         * renderItem={(item,key)=><div>{'Item:' + JSON.stringify(item)}}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(item,key)=><ItemCard data={item} titleField='Name' />}
         * ```
         */
        renderItem: (item: any, key: number) => JSX.Element,

        /**
         * The number of items to fetch in each page. This gets passed to the data function as the `max` parameter
         */
        pageSize: number,

        args?: any


        /**
         * This function renders a loading animation. If not specified, the default loading animation will be used.
         */
        renderLoading?: () => JSX.Element,

        /**
         * Any extra class names to be added to the component
         */
        className?: string
        showFooter?: boolean,
        scrollStep?: number
    }
    /**
     *
     * A infinite-scrollable list that supports paging in of items
     * @export
     */
    export const DataList: React.FunctionComponent<IDataListProps>;

    interface IItemCardProps {
        /**
         * A reference to the data to be rendered as a card.
         */
        item?: any,

        /**
         * The name of the field within the `item` that has the url of an image to be shown
         */
        imageField?: string,

        /**
         * The name of the field within `item` that has the title of the object
         */
        titleField?: string,

        /**
         * The name of the field within 'item' that holds the subtitle of the object
         */
        subTitleField?: string,

        /**
         * This name of the field within `item` that contains any 'name' associated with the object.
         * This property is used only if the imageField value is not set. The name is abbreviated and set as the profile image.
         */
        nameField?: string,

        /**
         * Any extra css classes to biind to the card.
         */
        className?: string
    }
    /**
     * This component is used to render some item in a standard card form.
     * This includes a profile pic, a title, a subtitle and a list of fields and values.
     * @export
     *
     */
    export const ItemCard: React.FunctionComponent<IItemCardProps>;

    interface IDataGridProps {
        /**
         * The items to render into a grid. This will be an array of any data.
         * The data is passed into the render function and can be used there to render the actual grid cell.
         *
         */
        data: Array<any>,

        /**
         * A function which can be used to return the contents of each cell. The function will be passed 2 parameters:
         *
         * `item`: The individual item from the list of items passed as the `data` prop
         * `key`: The index of the item in the list
         *
         * This function should return a react element
         *
         * @example
         *
         * ```
         * renderItem={(item:any,key:number)=> <div>{'Key Is ' + key}}</div>}
         * ```
         */
        renderItem: (item: any, key: number) => JSX.Element,

        /**
         * The number of columns to display. Items will be layed out row by row and the number of columns in each row is specified here
         */
        columns: number,

        /**
         * Any additional css class names to include in the component
         */
        className?: string
    }
    /**
     * @export
     *
     * Used to show data in a matrix or grid. You can give it a list of items and a function to render those items.
     * Items get layed out in a grid and displayed.
     *
     * @example
     * ```
     * <DataGrid data={[ {'temperature':33, location:'Building Lobby'}, {'temperature':32,location:'Car Park'} ]}
     *          renderItem={(item)=><div>{`Temperature: ${item.temperature}`}}
     *          columns={2}
     * />
     * ```
     *
     */
    export const DataGrid: React.FunctionComponent<IDataGridProps>;
    /**
 * @export
 */
    interface IWidgetWrapperProps {
        /**
         * Any extra css class names to add to the widget wrapper
         */
        className?: string
    }
    /**
     *
     * @export
     *
     * This is a standard wrapper for widgets.
     * It provides basic visual styling for common widgets. You should generally wrap all your widgets in this.
     *
     * @example
     * ```
     * <WidgetWrapper>
     *  <Label>My custom widget</Label>
     * </WidgetWrapper>
     * ```
     */
    export const WidgetWrapper: React.FunctionComponent<IWidgetWrapperProps>;

    interface ITrendChartProps {
        /**
         * The series to plot. More than one can be visualized.
         */
        data: ITrendSeries[],

        /**
         * Use this to render a custom tooltip that will appear when the user hovers over a data point.
         * The data being hovered over is passed as a parameter.
         *
         * @example
         * onShowTooltip={(data)=><div>{`Temperature: ${data.temp}`}</div>}
         */
        onShowTooltip?: (data: any) => JSX.Element

        /**
         * Called whenever a data point is clicked on. The data point being clicked on is passed as a parameter to the function
         */
        onClick?: (data: any) => JSX.Element
    }
    /**
     * A component to show time series based trend or line visualizations
     * @export
     *
     */
    export const TrendChartComponent: React.FunctionComponent<ITrendChartProps>;

    interface IMapComponentProps {
        /**
         * The url of the tile server that will serve up map tiles.
         * This url should have the following placeholders in them:
         * `{x}`, `{y}` and `{z}`
         *
         * `{z}` represents the current zoom level
         *
         * @example
         * ```
         * mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         * ```
         */
        mapUrl: string,

        /**
         * This handler gets called whenever a marker is clicked on.
         * The first paramater represents the marker element that was clicked on.
         * The second parameter represents the data associated with the marker
         */
        onMarkerClick: (el: any, data: any) => void

        /**
         * A list of markers to render.
         * Each marker has a `latitutde` `longitude` and `data` field.
         * The `data` field can store arbitrary data.
         */
        markers: IMarker[],

        /**
         * Where the map is centered.
         */
        center?: { position: IMarker, renderMarker?: boolean },

        /**
         * The default zoom level to show on the map
         */
        zoom?: number
    }
    /**
     * A map widget that can show a pannable/zoomable map with markers
     * @export
     *
     */
    export const MapComponent: React.FunctionComponent<IMapComponentProps>;
    /**
 * @export
 *
 */
    interface IDatePickerProps {
        /**
         * The title
         */
        title: string,

        /**
         * The currently selected date. Either a Date object or an ISO8601 string representation of a date
         */
        date: string | Date,

        /**
         * Callback that gets executed whenever a date is selected/changed in the date picker
         */
        onChange: (date: Date) => void,

        /**
         * Called when the calendar popup is closed
         */
        closeOnSelect?: boolean,

        /**
         * Additional options to control behaviour
         */
        options?: IDatePickerOptions,

        /**
         * Set to true to prevent a user from typing in a date
         */
        disableInput?: boolean,

    }
    /**
     *
     * @export
     *
     * This component is used to select a date.
     *
     * @example
     * ```
     *  <DatePicker
     *    title="Date"
     *    date={date}
     *    onChange={(date) => setDate(date)}
     * ```
     *
     * @example
     * <DatePicker
     *     title="Date"
     *     date={date}
     *     onChange={(date) => setDate(date)}
     *     options={{
     *         disableWeekEnds: true
     *     }}
     * />
     */
    export const DatePicker: React.FunctionComponent<IDatePickerProps>;
    export const useToast: ToastHook;


    /**
     * @export
     * These props are passed to the render method of each wizard step.
     * 
     */
    interface IWizardStepProps {
        /**
         * Triggers a request to go to the next step in the wizard. You can use this functional to programatically move to the next step (the user can also click the 'Next' action to do the same thing)
         */
        next: (id?: string) => void;

        /**
         * Similar to `next`, you can call this function to programatically go to the previous step in the wizard.
         */
        prev: () => void;
    }

    /**
     * Defines an individual step within a wizard.
     * Each step provides a render method to render the actual step. 
     * You also need to specify a unique 'id' and title for the step.
     * You can optionally specify an `onNext` callback  to run whenever the user wants to go to the next step.
     * This can return either `null` - meaning we should not proceed to the next step, or the id of the next step to go to.
     * @export
     */
    interface IWizardStep {
        onNext?: () => string | null;
        id: string;
        title: string;
        render: (props: IWizardStepProps) => React.ReactNode;
    }

    interface IWizardProps {
        /**
         * A list of steps within the wizard.
         */
        steps: IWizardStep[];

        /**
         * What title should be shown on the 'next' button when we reach the last screen
         */
        completionTitle?: string;

        /**
         * This callback is run whenever they hit the final 'completion' action on the last step
         */
        onComplete?: () => void;
    }

    /**
     * A wizard-style interface to guide users through a journey.
     * You can conditionally skip steps and validate steps before proceeding.
     * @export
     */
    export const Wizard: React.FunctionComponent<IWizardProps>

    interface IItemListCardProps {
        /**
           * The title
           */
        title: string,

        renderSubTitle?: () => JSX.Element,
        item: any,
        fields: string[],
        renderField?: (object: any, field: string) => JSX.Element,
        backgroundColor?: string
        className?: string
    }
    /**
     * @export
     */

    export const ItemListCard: React.FunctionComponent<IItemListCardProps>


  /**  
    * @export
 */
    interface IFilterWrapperProps {
        /**
         * Any extra css class names to add to the widget wrapper
         */
        className?: string
    }
    /**
     *
     * @export
     *
     * This is a standard wrapper for widgets.
     * It provides basic visual styling for common widgets. You should generally wrap all your widgets in this.
     *
     * @example
     * ```
     * <WidgetWrapper>
     *  <Label>My custom widget</Label>
     * </WidgetWrapper>
     * ```
     */
    export const FilterWrapper: React.FunctionComponent<IFilterWrapperProps>;

}



