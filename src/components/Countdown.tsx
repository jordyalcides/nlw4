import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
	const {
		minutes,
		seconds,
		isActive,
		hasFinished,
		startCountdown,
		resetCountdown,
		upMinute,
		downMinute
	} = useContext(CountdownContext);

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


	return (
		<div>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
				<div className={styles.minuteButtonsContainer}>
					<button
						type="button"
						className={styles.upMinuteButton}
						onClick={upMinute}>
						<img src="/icons/sort-up-solid.svg" alt="Aumentar contador" />
					</button>
					<button
						type="button"
						className={styles.downMinuteButton}
						onClick={downMinute}>
						<img src="/icons/sort-down-solid.svg" alt="Diminuir contador" />
					</button>
				</div>
			</div>

			{hasFinished ? (
				<button
					disabled
					type="button"
					className={styles.countdownButton}
					onClick={resetCountdown}>
					Ciclo terminado
				</button>
			) : (
					<>
						{isActive ? (
							<button
								type="button"
								className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
								onClick={resetCountdown}>
								Abandonar ciclo
							</button>
						) : (
								<button
									type="button"
									className={styles.countdownButton}
									onClick={startCountdown}>
									Iniciar um ciclo
								</button>
							)
						}
					</>
				)}
		</div >
	)
}