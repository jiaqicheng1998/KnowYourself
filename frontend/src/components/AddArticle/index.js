import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEvent } from '../../store/event';
import { useParams, useHistory } from 'react-router-dom';