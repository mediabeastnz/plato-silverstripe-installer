<!-- Icons -->
<% with SiteConfig %>
	<% if AppleTouchIcon %>
	<% with AppleTouchIcon %>
		<link rel="apple-touch-icon" sizes="57x57" href="{$Fill(57,57).URL}">
		<link rel="apple-touch-icon" sizes="60x60" href="{$Fill(60,60).URL}">
		<link rel="apple-touch-icon" sizes="72x72" href="{$Fill(72,72).URL}">
		<link rel="apple-touch-icon" sizes="76x76" href="{$Fill(76,76).URL}">
		<link rel="apple-touch-icon" sizes="114x114" href="{$Fill(114,114).URL}">
		<link rel="apple-touch-icon" sizes="120x120" href="{$Fill(120,120).URL}">
		<link rel="apple-touch-icon" sizes="144x144" href="{$Fill(144,144).URL}">
		<link rel="apple-touch-icon" sizes="152x152" href="{$Fill(152,152).URL}">
		<link rel="apple-touch-icon" sizes="180x180" href="{$Fill(180,180).URL}">
	<% end_with %>
	<% end_if %>

	<% if Favicon %>
	<% with Favicon %>
		<link rel="icon" type="image/png" href="{$Fill(57,57).URL}" sizes="32x32">
		<link rel="icon" type="image/png" href="{$Fill(57,57).URL}" sizes="194x194">
		<link rel="icon" type="image/png" href="{$Fill(57,57).URL}" sizes="96x96">
		<link rel="icon" type="image/png" href="{$Fill(57,57).URL}" sizes="192x192">
		<link rel="icon" type="image/png" href="{$Fill(57,57).URL}" sizes="16x16">
	<% end_with %>
	<% end_if %>

	<% if WindowsTileColor %>
		<meta name="msapplication-TileColor" content="{$WindowsTileColor}">
	<% end_if %>

	<% if MSTile %>
	<% with MSTile %>
		<meta name="msapplication-TileImage" content="{$Fill(144,144).URL}">
		<meta name="msapplication-config" content="/icon/browserconfig">
	<% end_with %>
	<% end_if %>
	
	<% if AndroidChrome %>
		<link rel="manifest" href="/icon/manifest">
	<% end_if %>

	<% if ThemeColor %>
		<meta name="theme-color" content="{$ThemeColor}">
	<% end_if %>
<% end_with %>
<!-- Icons end -->
