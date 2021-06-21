# Introduction

Hive can be considered as an **enterprise social network**, where coworkers or simply collaborators can **share the content** of different types awaiting **answers from other collaborators.** The possibility to create different groups and target them when creating "Posts" in order to share them only with some specific users makes collaborators able to create a group for a special project and for a limited period of time thus sharing ideas to the persons related to this project or simply create a group of friends they want to be able to share content with privately.

This document details the standard functionalities of the application, its original specifications if I may say, see the related document to learn about this application’s <a href="#/?id=variability-specification-the-feature-model">variability points</a> and see <a href="#/?id=variability-implementation-mapping-and-derivation">how it has been done</a>.

# User Guide

## Connection

<div class="row">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image001.png)

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image002.png)

</div>

In order to access the application, users can create an account by clicking the **"Register"** link and filling the mandatory information, the mail and password can then be used later on to connect.

## The Flow Section

Once users are connected to the application, they have access to the first page of the application, the Flow. This is the central point of the application, where are regrouped all of the collaborators shared content, presented as cards of different types depending on the content type, an "Idea" card for example can be answered by "Yes" or "No" and a "Report" card is automatically generated the day after the concerned card's expiration date to show its results.

<div class="row">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image004.png)

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image006.png)

</div>

Users can navigate through the list of cards by swiping them to the left or right or decide to "Discard" one by swiping it to the top of the screen, this way the card won't be shown again to this user.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image008.png)

</div>

## The Highlights Section

The Highlights section of the application is shared by all the collaborators and shows several information.

The best contributor is the collaborator that has created the most post in the past 30 days and has the most average answer number on these posts.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image009.png)

</div>

The best post shows the results of a post that expired in the past 10 days that have the best (answers /views) score.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image010.png)

</div>

Finally, the top posts are non expired posts (up to 5) that have the best (answers /views) score. It is possible to click on one of the list's items to show the card and answer it if it wasn't done before, otherwise, it shows its results.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image012.png)

</div>

<div class="row">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image014.png)

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image016.png)

</div>

## The Posts Section

The post section is where users find their previously created posts, can see their details and results, and create new ones. It shows a list of top posts that are the current user's posts that have the most answers, and the list of all the user's posts.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image018.png)

</div>

The post creation process starts when the user clicks on the create button in the top right corner and then needs to choose which type of post to create.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image019.png)

</div>

Once the post type is selected, the user is invited to enter its content and choose a picture to display on the card or choose to use the default image. If the card is a question it will then ask the user to create up to 5 answers available for the question. The card then needs to be configured, it needs a publication date that is the date at which the card will be available for other collaborators and an expiration date that is the date until which it will be available.

It is possible to make the card public in order to make it available for every others contributors or to make it target one or more specific group(s) in order to make it target specific collaborators.

Once all the card's settings have been correctly configured a preview of the card as it will be displayed in the Flow is showed and the user can choose to save it or to go back and change the information. Once saved, the card will be available in the user's posts list as well as its results. It is important to know that only the yet to be published cards can be edited after being saved, once a card is published its content is definitive (it's still possible to delete it though).

<div class="row">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image021.png)

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image023.png)

</div>

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image025.png)

</div>

Clicking on one of the main page items will open the concerned post's details page, showing its different information chosen during its creation and others such as its status (published, not published, or closed) and its actual results.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image027.png)

</div>

It is possible from this page or the previous one to click on the menu icon (top right corner in the details page and end of the line of each item in the main page) to open a secondary menu giving access to the deletion of the post or its edition if it is in the "unpublished" status. When accessing the post edition it is then possible to change all the card information that were chosen during its creation and save the changes.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image029.png)

</div>

## The Account Section

The account section is where users can review and edit their profile information, manage their groups, change the application settings or sign out from the application.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image031.png)

</div>

> The profile

Users are able to view and edit any of their profile information from this page.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image033.png)

</div>

> Groups management

In this part of the application, users can see and manage the groups of which they are a member, or the ones they created and create new ones. This group system makes users able to target a specific group and by extension-specific collaborators when creating cards in order to restrict the list of persons being able to answer these cards.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image035.png)

</div>

In order to create a group, users only need to enter a name, a country, and a city for the group before saving it.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image037.png)

</div>

Once the group is created, it is directly possible to add any collaborators as members of this group and start creating cards targetting this group. The group creator can of course remove members from his groups as well.

<div class="row">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image039.png)

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image041.png)

</div>

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image043.png)

</div>

Members can be removed by the creator of the group by clicking on their corresponding menu icon (at the end of each line of the list) and select the remove option or by accessing the same page used to add members and uncheck the corresponding checkboxes before saving. the members themselves can leave the group by clicking on their corresponding menu icon in the list of members and choosing "leave", this is also possible from the list of groups by clicking on the menu icon next to a group and choosing "leave" for groups of which the user is not the creator.

<div class="row">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image045.png)

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image047.png)

</div>

Group creators can use the same icon in the group's list page to delete a group or edit it, cards targetting deleted group will not be available anymore but their results will stay viewable for their creator. Editing a group is just a matter of changing its name, country, and city and has no further impact.

<div class="row">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image049.png)

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image051.png)

</div>

> Settings

The settings page enables users to change the application language, English and French are available.

> Sign Out

This takes the user back to the login page in order to reconnect.

#  Variability specification - The feature model

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image053.png)

</div>

We identified several variability points for this application, we’ll detail them here using this variability model as support.

## Features

> Posts_creation

This feature node represents the different types of posts that user can create, the types of **idea, question,** and **event** are mandatory, meaning that they’ll always be selected (they are part of the default package of the feature of the app) while the types **quote** and **suggestion** are optional, we can use one of the two, both, or none of the two when derivating.

> Flow_display

This is the configuration of the flow display, the flow can be displayed as a stack of cards (as presented in the <a href="#/?id=user-guide">user guide</a>) or as a scrollable list.

We represented these two different Display via two child nodes (**cards** and **list**) linked by an **XOR** relation as they are mutually exclusive.

> Like

The **like** feature does pretty much what it says, it enables users to like cards in the flow.

We decided to make this feature available only in the cards display mode and we chose to represent that relation as a cross-feature constraint (**like** => **cards**) instead of making it a child of the cards feature.

This feature being optional it can be activated/deactivated during derivation.

> Default_language 

A pretty straightforward feature, it represent the default language of the application (understand, the language that the app will launch in).

It sets an **XOR** relation between **French** and **English** because, obviously, they are mutually exclusive.

## Resources

As well as features we have some variable resources as well, unlike features, these will have less impact on the code itself after derivation but will change some specific parts.

> Icon and Splash

These resources are the application’s icon and the application’s splash screen image (the image shown while the app is loading on launch).

> Title

This resource is the name of the application after derivating, the name will be displayed in the device’s app.

> Server_URL

This resource enables the front end application to know what URL to use to send requests to the back end, it will rewrite the default base URL of the app.

> Primary_color and Secondary_color

These resources are pretty straightforward, they will overwrite the primary and secondary colors used throughout the application’s design, enabling users to clearly change the app’s identity according to their own graphical chart.

If we don’t choose these two resources (they are optional), the application after derivating will be with its original colors.

> Post types images/color

Each post type feature (**idea, question, event, quote,** and **suggestion**) has a resource child that represents this type of content’s default picture (for **Quote** it’s default color), enabling users to change the default look and feel of each type of content.

If these resources are not filled the app will use the default images (default color for **Quote**) (seen in the user guide).

If quote and/or suggestion aren’t activated, filling the resource information is unnecessary and the default image and color will be deleted from the derivated code. We choose to use constraints to define this relation (**Quote** => **QuoteColor**) and (**Suggestion** => **SuggestionImage**).

If quote and/or suggestion are enabled, we can choose whether or not to change the default color/picture of quote/suggestion as both resources are optional.

# Variability implementation - Mapping and derivation

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image054.png)

</div>

Using this feature model (which is detailed in the <a href="#/?id=variability-specification-the-feature-model">variability specifications</a> file) we then have to place **markers** in the code to mark entry points of features or resources which will then be automatically **propagated** during the **mapping** and enable us to select how to act on the code when activating/deactivating the related features.

For example, if we place a marker on a specific component field, during the mapping process the analyzer will ask us how to act on every reference of said field, enabling us to delete or replace bits and pieces of code for the actual feature.

If we place a marker on files, they will be deleted automatically when the feature is not selected.

After placing our markers we will have to launch the mapping process and set actions to take on the related pieces of code.

Note that mapping a feature means determining what action to take when said feature is **NOT** activated. Mapping a resource is quite different as the resource’s marker will be replaced with the selected value during derivation.

## Mapping

Once all our markers are in place we need to map our features and resources. During this mapping the extension will take us from marker to marker (and to references of those markers) in order for us to decide how to act on the code when the currectly mapped feature is not activated.

The extension offers us 3 options:

- Map all feature : the mapping will be done feature after feature and will end with the mapping or resources (that will not exactly call for actions on our side).

- Map selected feature / resource: this will come in handy when we will have done a complete run of mapping and need to re-map one or several specific features. After selecting this option, the extension will ask us what features we want to map.

In order to launch the mapping, we simply have to right-click on the feature model file and select Mobioos-Forge → Feature mapping → Map all feature (or the other options).

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image055.gif)

</div>

Once the mapping is launched Forge will open the file where the first marker is found. The feature being mapped is shown at the bottom.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image057.png)

</div>

We will have the possibility to select the bit of code to change and select the action on this code by using **ctrl + q** and select in the menu between *“delete”, “replace”, “ignore”* or *“cancel”*.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image059.png)

</div>

- Selecting “delete” will set this part of the code to be deleted when the current feature isn’t selected.

- Selecting “replace” will show another menu that enables us to select an already existing replacement or to create a new one.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image061.png)

</div>

If we choose an existing one it will simply use it and replace the selected code with what’s defined in the replacement, if we choose to create a new one a new file named replacement.ts will open beside the current file and enable us to write the code we want to replace the selected one.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image063.png)

</div>

We can then write whatever we need and save the file, after what we’ll be asked to name that new replacement, the name is prefilled with a suffix to show what feature it’s related to.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image065.png)

</div>

We fill the name as wanted and press enter to validate the selection and finish the replacement creation. This replacement will be used when the feature isn’t selected.

- Selecting “ignore” will ignore that seed and not set any mapping for it, it has the same effect as clicking on nothing (deselecting the seed) and using ctrl + q.

- Selecting “cancel” will completely cancel the mapping process.

In our case and as stated earlier we will mostly use the “delete” option to remove pieces of code.

> Mapping the features

We will continue the mapping with the two features that we have marked:

<span style="color: #2F5496; font-family: 'Calibri Light',sans-serif;">Suggestion</span>

This feature has markers in the frontend and in the backend. The mapper will mix between the backend and frontend markers.

- The first marker is in the backend. It is a string “Suggestion” that is in a method that retrives the default image of a card type.

- We select the piece of code in the Suggestion section, then **ctrl + q** and we choose the deletion action.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image066.gif)

</div>

- Then we pass to the method *“CreateSuggestionDefaultPic“* which creates the default image of the suggestion card in the database. This method is used when launching the backend for the first time.

- We select the whole method then **ctrl + q** and we select **Delete** button.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image068.png)

</div>

- Now we pass to the frontend, we have a method that contains a piece of code related to the suggestion feature. So we will do the same thing as we did previously. Select the piece of code then **ctrl + q** and we select **Delete**.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image069.gif)

</div>

At some point, we’ll reach our HTML file(s).

- We will do the same thing, we select the parts related to the Suggestion feature and delete it.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image070.gif)

</div>

For the file marker feature, the files are automatically set to be deleted when the feature is not selected but in the mapping the mapper will find the paths to these files and we can choose if we delete, replace or ignore these paths.

At the end of our propagation, the mapper will search all these paths to its files (the files that have a file marker). In our case, these paths are declared inside the files which are also marked by the Suggestion feature, so we will just ignore them.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image071.gif)

</div>

> Flow display

Now we will map the children of the feature “flow_display”, the **Cards** display, and the **List** display.

> Cards and List

- The first marker of the Cards feature is on this method used in the Flow component to trigger when a card is answered.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image073.png)

</div>

- We select the whole method then **ctrl + q** and we choose the Deletion action.
  
- After that, the mapping process will continue to the next marker or reference to that method. In our case the mapper will find all the markers for the Cards feature then it will find the references of the removed methods.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image074.gif)

</div>

At some point, we’ll reach our HTML file(s),

- The mapping works exactly the same in those, we can delete the parts related to the Cards feature

- We placed our markers on this whole piece of code to avoid having to think about it during the mapping.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image075.gif)

</div>

After finishing the mapping for the Cards feature, we pass now to the List feature. We have to follow the same process.

for the List feature, only one method is called in the Html file and we have markers in the HTML files related to this feature. So the mapping will be faster than the previous one.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image076.gif)

</div>

> Mapping the resources

The resource mapping is simpler than the feature mapping, which will not exactly call for actions on our side.

<span style="color: #2F5496; font-family: 'Calibri Light',sans-serif;">SuggestionImage and primaryColor</span>

When we are on the SuggestionImage resource, the mapper asks us if we want to look for references to this file or not. In our case, we put “Yes” so that the mapper finds other references to this file.

And with the primaryColor, the mapper will not ask us anything.

## Derivation

In order to test our smartapp derivation, we can simply **right-click on the feature model file and select → Mobioos-Forge → Create Configuration**. The extension will then ask us to name that configuration. We can select any name and use Enter to open 
<div class="align-center">the configuration editor.

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image078.gif)

</div>

This enables us to first try out our features relations and make sure that our feature model is correct, for example, if we select the list feature we see that cards and like features are deactivated as those are mutually exclusive (list and cards via their XOR relation, like is linked to cards via a constraint)

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image080.png)

</div>

We can now try out our variability by filling the necessary fields and selecting the needed features, click on save which will trigger showing errors if there are some. We then just have to click on derivate and wait for the magic to happen.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image082.png)

</div>

A new project will be created in the **C:/Users/<user>/mobioos** folder with the name we used when creating the configuration, in which we’ll find our derivated code, we can for example check that the methods that we set as deleted earlier are effectively deleted.

We can also, of course, launch the app and try it out to see the difference and test everything out.

In summary, to be able to derive an application:

- Install the **Mobioos-Forge** extension.

- Identify variability points for our application using the extension’s feature model.

- Set markers for our features and resources created in the feature model.

- Map the markers we added.

- Finally derive our application.

Using the **Mobioos-Forge** extension is simple and intuitive, just follow the steps described above and you can derive any kind of application.


# Front end Marking

## Features Marking

Now that we’ve covered the basics let’s place markers for our features and resources. In this example, we will go over 2 features and 2 resources.

> Suggestion

The *Suggestion* feature enables users to create suggestion posts. There is code for this feature in both the front end and the back end of the application, which means we will have to place 2 sets of markers.

First, we know from the previous sections that in the front end codes for different types of posts are grouped in modules, we can then take advantage of the File Marker Type and place a marker directly on the root directory of the suggestion module. **Right-click on the suggestion directory → Mobioos-Forge → File Markers → Add a file marker**.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image083.gif)

</div>

Next, we select the Suggestion feature

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image085.png)

</div>

This should take care of the suggestion module, by creating a marker on files this way the files are automatically set to be deleted when the feature is not selected.

We can do the same thing to mark the card component for suggestion posts:

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image087.png)

</div>

With only these two markers we should be done with most of the suggestion marking, next, we’ll want to make sure that no reference is left. Most of the references should get picked up by the analyzer but there are some cases that we have to handle ourselves, references in HTML files or lazy loaded references for example.

Let’s handle the lazy-loaded references first, it’s pretty straight forward in our case as it only concerns the routing file of the post-module, we’ll mark the suggestion route as follows

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image089.png)

</div>

We then need to find other and less evident “references”/feature related code, for example, in the main posts page we display a filtering menu to see only posts of specific types, it doesn’t make sense to show the suggestion filter when the feature is deactivated so we’ll need to remove that from the HTML

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image091.png)

</div>

Next, in the choose-new-post-category component we find a menu item to access the creation process and a related component method, we’ll seed both

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image093.png)

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image095.png)

</div>

Note that in this case we could only seed in the html to hide the display and leave the method as is since it should never fall in this switch case, we choose to seed both anyway for code cleanliness sake.

Next, we’ll find 2 occurrences in the flow.html file that we need to mark as well

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image097.png)

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image099.png)

</div>

Last, we seed the Suggestion type in the CardTypes enum

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image101.png)

</div>

With all that we should be done with marking the suggestion feature, every reference that we left aside should get picked up by the analyzer and we will have the opportunity to map them later on.

To recap what we have done:

1. Marker directories that contain suggestion-specific components and modules.

2. Marker lazy-loaded code that cannot be detected by code analyzer here.

3. Marker HTML files to remove pieces of display and related components if necessary.

4. Trust the analyzer to pick up any leftover references in the code.

This is the most straightforward process to follow when the code is modular enough that you can simply delete big chunks of code. We’ll see in the next example that we sometimes need to be a bit more patient to make sure to not miss anything.


> Flow display

We will now take care of a somewhat more difficult feature, the flow_display, and more precisely its children, the **Card** display, and the **List** display. For a quick reminder, this part of the feature model.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image103.png)

</div>

We can see that the children’s features are mutually exclusive since they’re linked through a **Xor** relation. We remember that the app has been implemented following the 150% app approach, meaning that the code for each of this feature is present in parallel. Our job here will be to map these implementations to the corresponding feature in order to be able to delete one or the other when derivating.

We’ll start as always with adding seeds, unlike the Suggestion feature that we saw earlier the **Cards** and **List** features are not separated in their own modules so we will not be able to delete big chunks of code here.

Even though it’s mostly a display issue we will also place seeds in the ts files in order to further clean the code from unused code.

First, we will seed the html file for the flow, we can see 2 ng-containers containing a list each, the first one is used to display the cards stack and the second one to display the list, we’ll place our seeds accordingly

The first seed for the Cards feature.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image105.png)

</div>

The second one for the List feature.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image107.png)

</div>

Note that we could have placed the seeds otherwise, only on a piece of those codes, for example, the point here being that we need the mapper to give us the opportunity to decide what to do with this code but the seed doesn’t have to take in the whole code for this. It will ease the mapping this way as we won’t have to think about what piece of code to delete it will be selected according to the seed, it’s only a question of preferences. Seeds placement in html files is not as important as in other files since the analyzer won’t be able to pick up references anyway.

Now, let’s clean up the .ts file, we mostly have to place seeds for the Cards feature as it’s the one needing the most extra methods to handle the cards stack whereas the list display only has one specific method handling answers.

First, we seed the class properties specific to the cards feature

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image109.png)

</div>

These are used to handle the stack of cards and can be deleted when the List feature is selected, this seeds will enable the analyzer to search for references of those properties and let us map the necessary actions.

Next, we will place a seed on each method specific to the cards display, there are several ones:
*onNextCard, onPreviousCard, onAdaptCardsStack, onDiscard, onSwipeCard* and *onCardAnswered*.

We place the seeds on each method declaration like this

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image111.png)

</div>

This way, the analyzer will find other references to those methods and we will be able to delete the calls when needed.

For the List display, we only need to seed the *onCardListAnswered* method.

Now that we’re done with the flow components we’ll have to take care of the card components, quick reminder, each type of post has its own display component in the shared module. These display components contain the code for each type of display, we’ll basically do the same work for every one of these components, let’s take the event card for example, Just like in the flow we have 2 divs each containing one display, the first for the cards display and second for the list display, we add the corresponding seeds on these.

The first for the cards display

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image113.png)

</div>

The second for the list display.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image115.png)

</div>

Next, we only have a seed to add in the .ts file for the cards display on this property that is used to animate the card when it comes on top of the stack

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image117.png)

</div>

We then repeat these operations on every card component and should be done with seeding these features.

We will follow the same process for every feature in order to have seeds for each. Note that you are not limited in terms of seeds, you can seed every occurrence that you see if it’s more comfortable but trusting the analyzer to detect references and using it at our advantage enables us to be more efficient, just keep in mind that it can detect only references that are present in the syntax tree, a visual example is to use the “Find all references” feature in Visual studio or visual studio code, if you do this on a property and it finds references, the analyzer should find them as well and give us the possibility to map it at mapping time.

## Resources Marking

Now that we’re done marking our features we simply have to marking our resources, these are a bit easier as it generally just replaces a bit of code or a file with whatever resource will be passed during the interview, we’ll take care of the primaryColor resource for this example.

In order to be able to seed resources we need to make sure to switch mode to the resource variability by clicking on the corresponding button in the bottom bar:

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image119.png)

</div>

Once we click this button it will switch to resource variability:

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image121.png)

</div>

We’re now ready to add seeds for resources.

> Primary color

The primary color of the application is the color that is used throughout the app to give it a coherent design, in this app it is used in some important text and mostly as a general background color, by default it’s a nice dark purple (*#4324B0*) and since the colors are optional resources if the user chooses not to customize it will use this color. This resource impacts only the front end of the application in our case.

To mark this color (and the secondary one alike), we simply need to find its declaration, in our case, it’s located in the theme/variables.scss file, and put a marker on the color value.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image123.png)

</div>

Since the resource is marked as a color resource the user will be presented with a color picker and this declaration will be replaced with the chosen hexadecimal value.

That’s it in this case. Note that if the color were not uniquely declared we would need to find everywhere in the css files where the hexa code is used to mark it, it’s doable, it would work, but we can see that it represents a bit more work to find all those occurrences. The analyzer won’t be able to pick this up by itself.

# Backend Marking

## Features marking

> Suggestion

In the backend codes, we have for each type of post a class, so we can use the file marking feature and place a marker on the file “Suggestion”. If the Suggestion feature is not activated, the file will be deleted.

To add this file seed, we simply go to the class “Suggestion”. **Right-click on the file and select → Mobioos-Forge → File Markers → Add a file marker**.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image125.png)

</div>

Then we choose what feature this marker is related to, we select **Suggestion**.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image127.png)

</div>

Once the marker is applied, you will notice that the name of the file has changed color and it is written “MF” on the right.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image129.png)

</div>

Now, we will look for other references. We have a Suggestion type in the CardTypes enumeration. We select the string “Suggestion”. **Right-click then Mobioos-Forge → Add a feature/resource marker**.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image131.png)

</div>

Once the marker applied it will show with the node’s marker color as the background.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image133.png)

</div>

Next, in the file DbInitializer.cs we have a method that creates the default picture for the suggestion card, we will add a seed on this method.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image135.png)

</div>

Last, we have a global variable to get the PictureId of the Suggestion card. In the file program.cs, we will add a seed for this variable.  

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image137.png)
![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image139.png)

</div>

The remaining references should get picked up by the analyzer.

<span style="color: #2F5496; font-family: 'Calibri Light',sans-serif;">To recap what we have done:</span>

- Mark the file of suggestion

- Mark variables and methods used by the suggestion feature

- Trust the analyzer to retrieve the remaining references in the code.

## Resources  marking

Before starting to add marks for resources, we need to be in the right setup. We simply click on the button in the bottom bar to switch to **Resource variability**.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image141.png)

</div>

> SuggestionImage

<div class="align-center">

The SuggestionImage resource represents the default picture for the suggestion card.

</div>

To add a marker to this resource, we have to find the URL referencing this picture. In the method CreateSuggestionDefaultPic found in the file DbInitializer.cs. **Right-click on the URL, select Mobioos-Forge → Add a feature/resource marker then select SuggestionImage**.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image143.png)

</div>

The marker is added.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image144.png)

</div>

# Variability implementation - Seeding

## The code base

Before starting to place markers we need to analyze the code to have a better idea of what impact should have each feature on our code.

Hive is separated as a front end in Ionic (4) and a back end in dotnet 5.0, linked to an sqlserver database, which means we will have to place markers in both front end and back end in order to have a coherent derivated code and coherent database data.

The application has been implemented following the 150% application concept, meaning that the smartapp contains the code for every feature in parallel, even the mutually exclusive ones. This means that :

1. The smartapp in itself won’t build and run

2. It will ease the mapping of features as we will mostly have to delete pieces of code that are related to disabled features.

We could get the same result by not including the 150% of code and replacing existing code during the mapping, it depends on your preferences.

## Placing markers

Creating markers is quite easy with Forge, you simply select the piece of code you want to place a marker on, **right click and select Mobioos-Forge → add a feature/resource marker**. Or select a folder or file then **right click and select Mobioos-Forge → File markers → Add a file marker**.

Forge will then ask us what feature/resource this marker is related to, we simply select the feature from the list. Note that to place merkers for a feature/resource you need to be in the correct configuration, the options presented in the above menu depend on this, simply click on the button in the bottom bar to switch between resource or functionality variability.

Once a marker is applied it will show with the node’s marker color (set in the feature model) as background if the parameter is activated in the extension’s settings, if not it will only indicate the presence of a marker by displaying the marker color in the line start. Note that this will display only the markers according to the current configuration (functionality variability will show only features markers and resource variability will show only resources markers)

### Features marking

Now that we’ve covered the basics let’s place markers for our features and resources. In this example we will go over 2 features and 2 resources.

> Suggestion

The suggestion feature enables users to create suggestion posts. There is code for this feature in both the front end and the back end of the application, which means we will have to place 2 sets of markers. Let’s start with the back end

<span style="color: #2F5496; font-family: 'Calibri Light',sans-serif;">Back end</span>

In the backend codes, we have for each type of post a class, so we can use the file marker feature and place a marker on the file “Suggestion”. If the suggestion feature is not activated, the file will be deleted.

To add this file marker, we simply go to the class “Suggestion”. **Right click on the file and select → Mobioos-Forge → File Markers → Add a file marker.** Then we choose what feature this marker is related to, we select **Suggestion.**

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image145.gif)

</div>

Once the marker is applied, you will notice that the name of the file has changed color and it is written “MF” on the right.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image146.png)

</div>

Now, we will look for other references. We have Suggestion type in the CardTypes enumeration. We select the field “Suggestion”. **Right click then Mobioos-Forge → Add a feature/resource marker**.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image147.gif)

</div>

Once the marker applied it will show with the node’s marker color as background. You can disable this background color from the extension’s settings, this way only the color indicator in the side bar will show (**Settings → Extensions → Mobioos Forge Configuration → Decorations: Background color**).

Next, in the file DbInitializer.cs we have a method which creates the default picture for the suggestion card, we will add a marker on this method.

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image148.gif)

Last, we have a global variable to get the PictureId of Suggestion card. In the file program.cs, we will add a marker for this variable.  

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image149.gif)

</div>

The remaining references should get picked up by the analyzer during mapping.

<span style="color: #2F5496; font-family: 'Calibri Light',sans-serif;">To recap what we have done:</span>

- Place a marker on the Suggestion class file

- Place a marker on variables and methods used by the suggestion feature

- Trust the analyzer to retrieve the remaining references in the code.

<span style="color: #2F5496; font-family: 'Calibri Light',sans-serif;">Front end</span>

First, we know from the previous chapters that in the front end codes for different types of post are grouped in modules, we can then take advantage of the file marker feature and place a marker directly on the root directory of the suggestion module. **Right click on the suggestion directory → Mobioos-Forge → File Markers → Add a file marker**. Next we select the Suggestion feature and select no when asked if the analyzer should run a content analysis on the file.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image083.gif)

</div>

This should take care of the suggestion module, by creating a marker on files this way the files are automatically set to be deleted when the feature is not selected.

We can do the same thing to mark the card component for suggestion posts:

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image150.gif)

</div>

With only these two markers we should be done with most of the suggestion marking, next we’ll want to make sure that no reference is left. Most of the references should get picked up by the analyzer but there are some cases that we have to handle ourselves, references in html files or lazy loaded references for example.

Let’s handle the lazy loaded references first, it’s pretty straight forward in our case as it only concerns the routing file of the post module, we’ll mark the suggestion route as follows

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image151.gif)

</div>

We then need to find other and less evident “references”/feature related code, for example, in the main posts page we display a filtering menu to see only posts of specific types, it doesn’t make sense to show the suggestion filter when the feature is disabled so we’ll need to remove that from the html, let’s put a marker on it.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image152.gif)

</div>

Next, in the choose-new-post-category component we find a menu item to access the creation process and a related component method, we’ll mark both

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image153.gif)
![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image154.gif)

Note that in this case we could only place a marker in the html to hide the display and leave the method as is since it should never fall in this switch case, we choose to mark both anyway for code cleanliness' sake.

Next, we’ll find 2 occurences in the flow.html file that we need to mark as well

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image155.gif)

</div>

Last, we place a marker on the Suggestion type in the CardTypes enum

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image156.gif)

</div>

With all that we should be done with marking the suggestion feature, every references that we left aside should get picked up by the analyzer and we will have the opportunity to map them later on.

**To recap what we have done:**

1. Place a marker on the directories that contain suggestion specific components and modules.

2. Mark lazy loaded code that cannot be detected by code analyzer here.

3. Place markers on HTML files to remove pieces of display and related components if necessary.

4. Trust the analyzer to pick up any leftover references in the code.

This is the most straight forward process to follow when the code is modular enough that you can simply delete big chunks of code. We’ll see in the next example that we sometimes need to be a bit more patient to make sure to not miss anything

### Flow display

We will now take care of a somewhat more difficult feature, the flow_display, and more precisely its children, the **Cards** display and the **List** display. For a quick reminder, this part of the feature model.

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image102.png)

</div>

We can see that the children features are mutually exclusive since they’re linked through a **Xor** relation. We remember that the app has been implemented following the 150% app concept, meaning that the code for each of this features is present in parallel. Our job here will be to map these implementations to the corresponding feature in order to be able to delete one or the other when derivating.

The good news is that these features are handled in the front end only, we will not have to place markers in the back end.

We’ll start as always with adding markers, unlike the Suggestion feature that we saw earlier the **Cards** and **List** features are not separated in their own modules so we will not be able to delete big chunks of code here.

Even though it’s mostly a display issue we will also place markers in the .ts files in order to further clean the code from unused code.

First, we will place markers on the html file for the flow, we can see 2 ng-containers containing a list each, the first one is used to display the cards stack and the second one to display the list, we’ll place our markers accordingly

The first marker for the Cards feature.

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image157.gif)

The second one for the List feature.

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image158.gif)

Note that we could have placed the markers otherwise, only on a piece of those codes for example, the point here being that we need the mapper to give us the opportunity to decide what to do with this code but the marker doesn’t have to take in the whole code for this. It will ease the mapping this way as we won’t have to think about what piece of code to delete it will be selected according to the marker, it’s only a question of preferences. Markers placement in html files is not as important as in other files since the analyzer won’t be able to pick up references anyway.

Now, let’s clean up the .ts file, we mostly have to place markers for the Cards feature as it’s the one needing the most extra methods to handle the cards stack whereas the list display only has one specific method handling answers.

First, we mark the class properties specific to the cards feature

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image159.gif)

These are used to handle the stack of cards and can be deleted when the List feature is selected, this markers will enable the analyzer to search for references of those properties and let us map the necessary actions.

Next, we will place a merker on each method specific to the cards display, there are several ones:
*onNextCard*, *onPreviousCard*, *onAdaptCardsStack*, *onDiscard*, *onSwipeCard* and *onCardAnswered*.

We place the markers on each method declaration like this

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image160.gif)

This way, the analyzer will find other references to those methods and we will be able to delete the calls when needed.

For the List display we only need to mark the *onCardListAnswered* method.

Now that we’re done with the flow components we’ll have to take care of the cards components, quick reminder, each type of post has its own display component in the shared module. These display components contain the code for each type of display, we’ll basically do the same work for every one of these components, let’s take the event card for example, Just like in the flow we have 2 divs each containing one display, the first for the cards display and second for the list display, we add the corresponding markers on these.

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image161.gif)

Next, we only have a marker to add in the .ts file for the cards display on this property that si used to animate the card when it comes on top of the stack

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image162.gif)

We then repeat these operations on every card components and should be done with marking these features.

We will follow the same process for every feature in order to have markers for each. Note that you are not limited in terms of markers, you can place markers on every occurence that you see if it’s more comfortable but trusting the analyzer to detect references and using it at our advantage enables us to be more efficient, just keep in mind that it can detect only references that are present in the syntax tree, a visual example is to use the “Find all references” feature in Visual studio or visual studio code, if you do this on a property and it finds references, the analyzer should find them as well and give us the possibility to map it at mapping time.

## Resources marking

Now that we’re done placing markers for our features we simply have to mark our resources, these are a bit easier as it generally just replaces a bit of code or a file with whatever resource will be passed during the interview, we’ll take care of the primaryColor resource for this example.

In order to be able to place resources markers we need to make sure to switch mode to the resource variability by clicking on the corresponding button in the bottom bar:

<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image163.png)

</div>

Once we click this button it will switch to resource variability:


<div class="align-center">

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image164.png)

</div>

We’re now ready to add markers for resources.

> SuggestionImage

The SuggestionImage resource represents the default picture for the suggestion card. We use the image file to save a base64 representation of it in the database. This feature impacts only the back end as the front end will simply request it when needed.

To add a marker to this resource, we have to find the url referencing this picture. In the method CreateSuggestionDefaultPic found in the file DbInitializer.cs. **Right click on the url, select Mobioos-Forge → Add a feature/resource marker then select SuggestionImage**.

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image165.gif)

What will happen to this when derivation comes is that, if the user choose to give a custom image, the file found in that path will be deleted and replaced with the custom image, the route will be updated accordingly if needed. If the route appears anywhere else we will need to place a marker there as well, it’s not the case here.

> Primary color

The primary color of the application is the color that is used throughout the app to give it a coherent design, in this app it is used in some important text and mostly as a general background color, by default it’s a nice dark purple (*#4324B0*) and since the colors are optional resources if the user choose not to customize it it will use this color. This resource impacts only the front end of the application in our case.

To place a marker for this color (and the secondary one alike) we simply need to find its declaration, in our case it’s located in the theme/variables.scss file, and put a marker on the color value

![alt text](https://mobioosstorageaccount.blob.core.windows.net/public-documentation/Hive-Doc/image166.gif)

Since the resource is marked as a color resource the user will be presented with a color picker and this declaration will be replaced with the chosen hexadecimal value.

That’s it in this case. Note that if the color were not uniquely declared we would need to find everywhere in the style files where the hexa code is used to mark it, it’s doable, it would work, but we can see that it represents a bit more work to find all those occurences. The analyzer won’t be able to pick this up by itself.














