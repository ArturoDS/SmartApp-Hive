# Get started


> # Mobioos Forge: Map business functionality into your code 

***Mobioos Forge*** Mobioos Forge helps developers to map the business functionality of their application into their code allowing them to see the precise implementation of each feature in their code.  
Based on this mapping, you can:
* Deeply customize your application: you can create a specific configuration of your application, containing only the features of your choice a then derivate this configuration. To customize applications, Mobioos Forge implements the general process of what is referred to as Software Product Line Engineering (SPLE). The next figure illustrates this general process that includes four activities organized into two levels: Domain Engineering and Application engineering.           
* Extract only the code of a specific set of feature(s) (to be available soon):  to easily reuse functionality across your application or bootstrap your application modernization process in micro-service. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/1.png">

> **Domain Engineering**

**1. Feature Model Specification**

The first activity towards the customization of applications is to explicitly specify the different features of the application. A specific feature can refer to 1) a specific functionality implemented by the application or 2) a resource that is included in the application. Features are described in a model called ***feature model (FM)***. The next Figure shows an example of feature model for a simple E-shop application where each node in the model represents a feature. To specify the different variation points to customize the application,feature model allows describing many types of variability. This includes mechanisms to explicitly specify the mandatory features (features that will be present in all customizations), optional feature (that can deleted), alternative feature (with a “OR” or an “XOR” choice). Feature models can also contain constraints that specify dependencies between features.  

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/2.jpg">


**2. Feature Maps**

The objective is to create a mapping between features and code fragments using annotations and/or colors. The idea is to be able to create feature maps showing for each feature what are the code fragments that implement it as illustrated in the next Figure.  

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/3.png">

> **Application Engineering**

**1. Configuration**

The object for this phase is a selection configuration of features to customize the application for a specific need. The next Figure shows a configuration example where Creditcard and High security are selected as well as the mandatory features. On the contrary, Bank Transfer, Standard security, and Search are not selected. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/4.jpg"> 

**2. Derivation**

The derivation process generates the source code of the customized variant that corresponds to a specific configuration by removing fragments related to the disabled features (program transformation). 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/5.png"> 

> **Feature Model background**

Feature models represent the information of all possible products of a software product line in terms of features and relationships among them. Feature models are a special type of information model widely used in software product line engineering. A feature model is represented as a hierarchically arranged set of features composed by: 

1. Relationships between a parent (or compound) feature and its child features (or sub features).  

2. Cross–tree (or cross–hierarchy) constraints that are typically inclusion or exclusion statements in the form: if feature F is included, then features A and B must also be included (or excluded).  

Feature models are used in different scenarios of software products ranging from model-driven development, feature-oriented programming, software factories, or generative programming, all of them around software product line development. Although feature models are studied in software product line engineering, these information models can be used in different contexts ranging from requirements gathering to data model structures, hence the potential importance of feature models in the information systems domain. 
<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/6.jpg"> 

**• Mandatory:** A child feature has a mandatory relationship with its parent when the child is included in all products in which its parent feature appears. 
• Optional: A child feature has an optional relationship with its parent when the child can be optionally included in all products in which its parent feature appears.  
**• Alternative:** A set of child features have an alternative relationship with their parent when only one feature of the children can be selected when its parent feature is part of the product.  
**• Or:** A set of child features have an or-relationship with their parent when one or more of them can be included in the products in which its parent feature appears. 

--- 

> # Mobioos Forge Extension for Visual Studio Code

Mobioos Forge is implemented as Visual Studio Code. This section the steps to install it and a complete guideline on How to use the extension. 


# Installation

In order to install Mobioos Forge extension, you need to have Visual Studio code installed in your computer.  
**Mobioos Forge** is an extension for Visual Studio code. To install it open VS Code and navigate to: **File → Preferences → Views and More Actions(...) → Install from VSIX**, then you have to select **Mobioos Forge** VSIX file.  
Once you finish the installation and you get " **Mobioos-Forge ready to use!** " Message you can see **Mobioos Icon** on the side menu.  
You are now ready to start using Mobioos Forge. 

**How to use Mobioos Forge** 

Before using **Mobioos Forge** you first need some of its concepts and how to use them in the extension. To illustrate we can set apart into 4 main steps:   

 1. Feature Model Specification
     * a.Init a feature model in this folder  
     * b.Design the Feature Model  
2. Feature Maps  
    * a.Add a feature/resource
    * b.Map features/resources 
3. Configuration (Create a configurations)  
4. Derivation (Package for Mobioos Fusion)    

This is the sequence of how to use Mobioos Forge, so after installing the extension on VS code we must add the project folder to VS code **File → Open Folder** or by using keyboard shortcuts **(Ctrl+O)** then select for the target folder (project), when you finish this step, you should get a notification "Mobioos-Forge ready to use!".  

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/7.gif">


--- 
# 1.Manage your feature model

## a. Init a feature model
In this phase, we are going to create a feature model (**FM**) inside the project folder. This model describing the feature tree defined Functionalities, Resources, and constraints that we are processing through all these steps. Creation of such feature models is simple, we have just to perform a right-click inside the folder; then click "**Mobioos-Forge**" and chose "Init a feature model in this folder". Next, you must enter the feature model name. Besides the fm.forge file this will also create some additional files:  
* Functionalities.maps.forge  
* Resources.maps.forge  
* Lib.forge    

To display the operations on this feature model you have just to right-click on the **FM.forge file** then it shows a sub-menu to manage all operations. The next figure clarifies this process.  

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/8.gif">

Besides what we have seen before to display the operations on this feature model, you can also use the Mobioos Menu to run different operations you have only Click on Mobioos Icon then load the target model. You can see the process in the next figure.

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/8p1.gif">

## b.Design your features
As mentioned above, we considered that the variability should be mapped to the elements of the model. This means that for each feature we need to identify the elements in the Model that are impacted by this feature. For instance, the functional features concern functions inside the SmartApp, it could be login, Buttons, Toggle, etc. The functional variability is related to the features using mechanisms such as Optionality, Or, and XOR.  
In addition to the functional features, we need also to consider what is referred to as “Resource features.” In this context, variability does not concern functionalities inside the SmartApp but resources that can include images, icons, text, Colors used API and files, etc. A feature model can also define a set of constraints specifying dependencies between the different features.   
By adding the Feature Model in the previous step, it should be open a new VS Code window under the name "**Feature Model Designer**". To understand this part let us discover the interface and the main functionalities. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/9.jpg">

### Adding Nodes
To start creating your feature model you need to add the nodes to the core (2) as a tree. To do this you can simply click on node a "Plus icon :heavy_plus_sign: " will displayed under the node when you click on it a new resource /feature will be created and linked to other one. this is how you add new features to the model and create links among those features. Or you can do right-click on the feature or resource then choose what you want to add Feature/Resource then select to position above or below. all these process are demonstrated on next figure.

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/10.gif">

After adding a node, you must fill up all the information about each feature. When we click on the created feature it allowed us to edit on a section (5) from screenshot "Feature Model Designer»: 
* **Node Type:** It is for selecting a type (feature or resource) and which resource file, Text, Fusion asset, and color.   
* **Name:** the id that is shown on the model and during the feature mapping.  
* **Children rule:** to give a role how the node children are been selected for the Xor (only one child), Or (At least one), No rule (selecting the child it will be free with no rule).  
* **Node rule:** to select if the node is Mandatory or Optional.  
* **Chatbot Natural Questions:** give a question for the feature during the interview it must be an (LG file). 
* **Team Members Role:** To specify the Role that can answer this question. for example (Securite, Store Viewer, Resource's contributor ...). 
* **Feature Help File:** it is (md file) for the help that appears during the interview (description for the object of this node). 
* **Node weight:** it is for the order on the node during the interview in decreasing order. When we add these configurations, you should click on "Update node and save". To make all this clear you can see the next figure it is a recap step by step.  

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/11.gif">

When you finished adding all the nodes (Features/Resources) you obtain a tree for your future model it is like the model.   

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/12.jpg">

### Adding constraint: 

The definition of a constraint is something that imposes a limit or restriction or that prevents something from occurring, for more information, you can check this link that explains how to use the constraints. 
To create constraints, you can click on Create new constraint (6) from "**Feature Model Designer**" then select your constraint by clicking on Features/Resources and constraint operations. The newly created constraint will be displayed in the constraints section (7). 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/13.gif">

When you finished creating nodes and constraints, you can move to the next step "**Mapping features**". 

---

# 2.Map your features

## a.Add markers

In this step, you are going to identify the resources and features that you have created in the previous step. It is amazingly simple just give some initial information in your source code; this is a preparation for the next step where Mobioos Forge will detect the rest of the code. For this step to make it simply let us use "Notepad" source code. we have 3 main functions Cut, Paste, and Copy after adding these 3 features we move to the code, and on the definition of these 3 variables:     
     1.Select the feature   
     2.Click on **Show Fix** Icon ![](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/13a1.png) or (**Ctrl +;**)     
     3.Click on "**Add functionality marker**."    
     4.Click on the feature’s name    
     5.Select the analyzer.    
Repeat all this for all the feature and resource. In the next figure, you can see how it works. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/14.gif">

To remove the marker, it quite simple just click on "**Mobioos-Forge: Remove a functionality marker**" you see this up the marked feature you want to remove, and you will get a success message. 

![](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/13a2.png) ![](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/13a3.png)

## b.Map the whole implementation

Here where **Mobioos Forge** will take care of all the work of mapping the Features and resources in the source code. The principle is that Mobioos Forge will identify all the features and resources according to what you have added in the previous step and ask you what you should do (**Delete, Replace, Ignore and Cancel**).To do this right-click on file **"fm.Forge" → Mobioos-Forge → Feature Mapping → Map all features** then, a new window opened with marked feature and message "**Mapping: functionality 'Name of feature**' " after that select the code press (**Ctrl+Q**) then select one of the options (**Delete, Replace, Ignore and Cancel**). Complete the process until the end (message appears that Mapping is done).
In addition, we can run the propagation for all the features or one by one (selected features/resources), we also have an indicator that allows us to see which features are not propagated yet. It is only we must choose from the **Mobioos menu “Map Selected Features”** or **“Map Selected resources”** .

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/15.gif">

For example, we select Delete if we want to remove Feature/resource from the code when the user does not want to use it on his last version of the application. For a better image, let us use the Notepad source code we have selected functionality "cut" during the mapping we select Delete which means through configuration or interview with the chatbot it allows users to keep or remove this functionality from the final app that he is going to use. So, what it Delete mean using the code without the selected feature. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/16.gif">

**Replace** it means to replace the code of feature/resource with a new code.to understand this let us back to the notepad code source we have the feature "Copy" when we replace it with new code let say "paste" it will be the "Cut". During the configuration or interview, if we did not choose to use "Copy", it automatically replaced with replacement code "Cut", on the contrary, if we keep it the source code does not change. When we select Replace, new windows opened to type the new code then press (**Ctrl+S**) after that enter a new ID at the end of this process you will get a message informing you that was a success. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/17.gif"> 

When you finished the mapping, you can check all features maps and replacements library from the menu you will find when you click on Mobioos Icon. On this menu, you can also do the mapping directly by clicking on "**Map all features**". 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/18.gif">

To map the features and resources you can do this by Clicking on Mobioos Icon then choose from the menu which type of mapping you want all at once or by selecting a specific feature(s). The following figure demonstrates that. Also, we can cancelled the mapping.

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/18a1.gif">

---

# 3.Create an app configuration

This step is a checker for all the previous steps to validate the feature model and create a subproject with a new configuration based on the choice that is made during this process. To do this right-click on the file (**"fm.forge" → Mobioos-Forge → Create a Configurations**) or by choosing directly from Mobioos Menu "**Create a Configurations**" Then type a name for this configuration a new window opens "**Configuration editor**" select your configuration then click on Save when you get the message of success, click on Derivate you will receive a bath of location to a new project file. The next figure clarifies how to do all configuration processes. And also, you can create multiple configurations, and by the fact that we can create a branch git of varied automatically after the derivation and allow to run pipelines ci/cd for deploying and testing the variant. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/19.gif">

---

# 4.Make a derivation

This is the last step before generating the smartApp file to use it on Mobioos-Fusion. it just a data entry to be added in the package that Mobioos-Fusion needs to add the smartApp in the store, also for the interview and creating Focus apps. This step has 6 phases:   
     **1.Smartapp information:** Give information about the application (Name, Version, Description, and Tags) this information will be displayed on Mobioos Fusion Store.   
     **2.Stacks:** Give information about the application source code, you can add more than one stack (Frontend, Backend, Database).     
     **3.Build:** it is a file used to build the focus app, which means the file contains the structure for Mobioos Fusion steps on how to build the focus apps.   
     **4.Assets:** Specify one or more asset files (constrained or rules) linked to the smartapp.      
     **5.Configuration:** it is the same as the previous step “Create a configuration” except on this step the generated file will be used to verify the derivation on Mobioos-Fusion.     
     **6.Package:** give a name for the generated file and path for the Package (target folder). at the end you get a smartApp in the target folder you can use this file to add your app on Mobioos-Fosion.

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/20.gif">

---

# Other Functionalities


**Mobioos-Forge** also provide other functions to help and make the general process of Software Product Line Engineering easier and to be much accerance during this process. 

## 1: Feature Model Diagnostics
Its tool to help and inform users to avoid constraints problems by giving suggestions on which constraint you can add and how the result will be to the generated variants. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/25.png">


## 2: Reuse Functionality

Mobioos-Forege allows you to create or split a sub-model from an existing Features/Resource and use it in other by saving all the relations on the original model and the sub one. Next will we see how to use these options .

**Split as new sub-model**   
The split feature is an extremely useful tool when designing FM model. Once the split feature has completed, it will show in the tree of the sub-model. Any features that you apply to the sub model before the split feature will automatically propagate to the original one. Any features that come after the split feature exist only in the original model. This sub-model appears on the original model as a yellow feature and ".fm.forge" file saved on the given location.    
So, we can extract that the use of split feature is to create multiple sub-models from an existing model. You can create model "fm.forge", and form an assembly from these sub-models.    
To do the split you can simply open the Feature model designer then Right-click on the desired feature and click on "**Ruse**" from the menu select "**Split as new sub-model**". In the below gif image, you can see all the process. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/26.gif">

**Attach a sub-model**
The Mobioos-Forge provides an adding or to be more specific attaching option this feature help to merge many models or sub-models. You can use splited model inside another one by opening the Feature model designer then Right-click on the desired feature and click on "Ruse" from the menu select "Attach a sub-model". The next figure illustrated the attaching feature.

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/27.gif">

As you can see, we have used a sub-model (default_language)from another project on this project.

**Create a sub-model**   
Sometimes the user needs to create a sub-model to attached directly inside FM model. this option has been also integrated on Mobioos-forge. You can add a new sub-model to the original one by selecting with which Feature/Resource you want to attach then Right-click and click on "Ruse" from the menu select "Create new sub-model " next you have to give a name to this model once you finish a new "Feature model designer" Tab opened to create the Tree for this FM. On the original Fm tree, the new sub-model will add to this one. Also, the fm.forge file will be created. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/28.gif">

## 3: File Marker
File markers are markers that the user can add to a file/folder They are used to associate a feature to the selected file/folder. To do so, you just have to right click on a **file/folder > Mobioos-Forge > File Markers > Add a file marker**, then you select your feature.MF marked put beside the file you have selected.   
After doing so, if you initiate the mapping process, the extension will look for references to the file/folder you just marked, and propagate them with the feature. And if you derivate a variant that does not contain the feature, all file/folder associated with the feature will be deleted. The next figure illustrates the file Marker process.

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/28a1.gif">

## 4: Feature Mapping through the Designer 
The user is able to run the mapping from the designer by mapping all the features at once or selecting the Feature/Recourse one by one. This option allows users to map only a specific feature without doing it for all of them.it so simple you can click on the button "Map All features" or by Clicking on the feature then select the name and next click on " Map selected feature". 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/29.gif">

---

> # Mobioos Forge Settings  

You can customize Settings/Parameters in **Mobioos Forge**. This is a description how to personals settings. You can access the settings by navigating to: **File → Preferences → Settings → Extensions → Mobioos-Forge**. In addition, you can use the keyboard shortcuts (**Ctrl+,**) then search for Mobioos Forge configuration".   

**Mobioos-Forge › Analysis: Default analyzer**     
Mobioos Forge use analysis tools to Map the features and there are different analyzers:     
Roslyn is the open-source implementation of both C# and Visual Basic compilers with an API surface for building code analysis tools.

**Mobioos-Forge › Analysis: Feature mapper**      
Feature mapper role is show code that belongs to a feature with its corresponding color or add an annotation to code that belongs to the feature.  

**Mobioos-Forge › Decorations: Background color**     
The goal is to Enable/Disable applying the features background colors in the editor.  

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/21.jpg">

**Mobioos-Forge › Decorations: Background nested colors**     
Background nested colors Use the feature's color even feature is nested in other ones or blend all the nested color. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/22.jpg">

**Mobioos-Forge › Decorations: Column** 
Applying the features colors in the left column Enable/Disable. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/23.png">

**Mobioos-Forge › Decorations: Column width**     
It defined the width to use for the column's colors. 

**Mobioos-Forge › Decorations: Replacement lines to show on hover**      
The number of lines to show when hovering a replacement Feature mapper. 

<img style="margin: 0 auto; display: block;" src="https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Forge-Doc/24.png">

**Mobioos-Forge › Git-branch: Creation**       
It is for Enable/Disable the git branch creation after the end of the derivation process. 

**Mobioos-Forge › Git-branch: Push**       
It is for Enable/Disable to push the created git branch after the end of the derivation process. 

**Mobioos-Forge: Variability**     
To select the variability workflow Functionality or Resource.
