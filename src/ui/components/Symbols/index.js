import React from 'react'
import classnames from 'classnames'

export function Suit({ suit, className }) {
	return (
		<svg className={classnames("suit", className)} xmlns="http://www.w3.org/2000/svg">
			<use xlinkHref={`#s${suit}`} />
		</svg>
	)
}

export function Flag() {
	return (
		<svg className="flagIcon" xmlns="http://www.w3.org/2000/svg">
			<use xlinkHref={`#flag`} />
		</svg>
	)
}

export function SymbolDefinitions() {
	// The symbols are Circle, Square, Triangle, Diamond, Star (five-edged), Butterfly, in this order.
	return (
		<svg width="0" height="0" id="symbolDefinitions">
			<defs>
				<symbol id="s0" viewBox="-100 -100 200 200">
					<circle cx="0" cy="0" r="100" fill="currentColor" />
				</symbol>
				<symbol id="s1" viewBox="-100 -100 200 200">
					<rect x="-80" y="-80" width="160" height="160" fill="currentColor" />
				</symbol>
				<symbol id="s2" viewBox="-100 -100 200 200">
					<polygon points="-86.60,50 0,-100 86.60,50" fill="currentColor" />
				</symbol>
				<symbol id="s3" viewBox="-100 -100 200 200">
					<polygon points="0,-100 -80,0 0,100 80,0" fill="currentColor" />
				</symbol>
				<symbol id="s4" viewBox="-100 -100 200 200">
					<polygon points="0,-100 22.45,-30.90 95.11,-30.90 36.33,11.80 58.78,80.90 0,38.20 -58.78,80.90 -36.33,11.80 -95.11,-30.90 -22.45,-30.90" fill="currentColor" />
				</symbol>
				<symbol id="s5" viewBox="-100 -100 200 200">
					<polygon points="-90,-90 -90,90 0,20 90,90 90,-90 0,-20" fill="currentColor" />
				</symbol>
				<symbol id="flag" viewBox="-200 -180 400 360">
					<path d="M-200,-150  c80,30 120,30 200,0  s120,-30 200,0 v100  c-80,-30 -120,-30 -200,0  s-120,30 -200,0  z" className="flagBar1" />
					<path d="M-200,-50  c80,30 120,30 200,0  s120,-30 200,0 v100  c-80,-30 -120,-30 -200,0  s-120,30 -200,0  z" className="flagBar2" fill="green" />
					<path d="M-200,50  c80,30 120,30 200,0  s120,-30 200,0 v100  c-80,-30 -120,-30 -200,0  s-120,30 -200,0  z" className="flagBar3" fill="currentColor" />
				</symbol>
			</defs>
		</svg>
	)
}