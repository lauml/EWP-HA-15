$("#befehle").DataTable({
    "ajax" : "befehle.json",
});

$("#tooltip_clone").tooltipster({
	content: $("#tooltip_clone_content").detach()
});

$("#tooltip_cd").tooltipster({
	content: $("#tooltip_cd_content").detach()
});

$("#tooltip_add").tooltipster({
	content: $("#tooltip_add_content").detach()
});

$("#tooltip_commit").tooltipster({
	content: $("#tooltip_commit_content").detach()
});

$("#tooltip_push").tooltipster({
	content: $("#tooltip_push_content").detach()
});

$("#tooltip_pull").tooltipster({
	content: $("#tooltip_pull_content").detach()
});