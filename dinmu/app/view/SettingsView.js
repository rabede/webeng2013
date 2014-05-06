Ext.define('Dinmu.view.SettingsView', {
    extend: 'Ext.form.Panel',
    xtype: 'settingsview',
    
    requires: [
		'Ext.form.FieldSet',
		'Ext.field.Toggle',
		'Ext.field.Select',
		'Ext.field.Text',
		'Ext.Button'
    ],
    
    config: {
		items:[{
			xtype: 'fieldset',
			title: 'SettingsView',
			instructions: 'In case you do not want the app to detect your location you can enter the city and country.',
			items: [
			{
                name: 'geo',
                xtype: 'togglefield',
                label: 'Auto detect?',
                labelWidth: '55%',
                value: '1'
            },
            {
                name: 'units',
                xtype: 'selectfield',
                label: 'Units',
                options: [{
					text: 'Fahrenheit',
					value: 'f'
				}, {
					text: 'Celsius',
					value: 'c'
				}],
				disable: 'true'
            },
            {
                name: 'city',
                xtype: 'textfield',
                label: 'City',
                disable: 'true'
            },
            {
                name: 'country',
                xtype: 'textfield',
                label: 'Country',
                disable: 'true'
            },
            {
                xtype: 'button',
                text: 'Refresh',
                ui: 'confirm',
                margin: '10 5',
                action: 'refresh'
            }] 
		}]       
    }
});
