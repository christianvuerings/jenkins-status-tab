(function() {

	const onJenkinsPage = () => {
		return !!document.querySelector('link[title="Jenkins"]');
	};

	const onBuildPage = () => {
		return !!document.querySelector('h1 img[tooltip]');
	};

	const getStatus = () => {
		return document.querySelector('h1 img[tooltip]').getAttribute('tooltip');
	};

	const setFavicon = (favicon) => {
		var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
		link.href = favicon;
		document.getElementsByTagName('head')[0].appendChild(link);
	}

	const setProgressFavicon = (count) => {
		setFavicon(window.jenkinsStatusTabIcons[`inProgress${count}`]);

		setTimeout(() => {
			if (count === 3) {
				count = 1;
			} else {
				count += 1;
			}
			setProgressFavicon(count);
		}, 500)
	}

	const pickFavicon = (status) => {
		if (status === 'Success') {
			setFavicon(window.jenkinsStatusTabIcons.success);
		} else if (status === 'In progress') {
			setProgressFavicon(1);
		} else {
			setFavicon(window.jenkinsStatusTabIcons.failed);
		}
	};

	const enableAutoRefresh = () => {
		const autoRefreshLink = document.querySelector('a[href="?auto_refresh=true"]');
		if (autoRefreshLink) {
			autoRefreshLink.click();
		}
	};

	// Make sure we're on an actual Jenkins build page
	if (onJenkinsPage() && onBuildPage()) {
		pickFavicon(getStatus());
		enableAutoRefresh();
	}

})();
